<template>
  <div id="span-selection">
    <header>
      <h1>Video {{ currentStep }}</h1>
      <div id="next-video">
        <custom-button size="small" :has-border="true" @clicked="advanceStep()"
          >{{ nextStepText }}
        </custom-button>
      </div>
    </header>
    <div id="ainer">
      <video ref="videoPlayer" class="video-js"></video>
      <video id="liveVideo" playsinline autoplay muted></video>
    </div>
    <div id="scratchpad">
      <textarea
        v-model="scratchpad"
        placeholder="Write the video's translation here..."
      ></textarea>

      <div id="timeline-container">
        <timeline
          :position="videoPosition"
          :playing="playing"
          :duration="duration"
          :frame-base-name="frameBaseName"
          :frame-number="frameNumber"
          ref="timeline"
          @change="updateSelection($event)"
          @change-position="changeTick"
        />
      </div>
      <div id="video-controls-container" class="controls-bottom-left">
        <video-controls
          :playing="playing"
          :playingSelection="playingSelection"
          :currentTime="currentTime"
          :duration="duration"
          
          @general-play="generalPlay()"
          @selection-play="selectionPlay()"
          @upload-video="handleUploadClick"
          @video-uploaded="handleVideoUploaded"
        />
        <!-- Your file input for uploads remains hidden as before -->
        <input type="file" ref="fileInput" @change="handleFileUpload" hidden />
      </div>
    </div>
    <div id="search-panel">
      <search
        ref="search"
        :selection="timelineSelection"
        :duration="duration"
        :currentStep="currentStep"
        :signs="signs"
      />
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import Timeline from "../components/Timeline.vue";
import VideoControls from "../components/VideoControls.vue";
import Search from "../components/Search.vue";
import CustomButton from "../components/CustomButton.vue";

export default {
  name: "SpanSelection",
  components: { Timeline, VideoControls, Search, CustomButton },
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: false,
          controls: false,
          fill: true,
          sources: [],
        };
      },
    },
  },
  data() {
    return {
      playing: false,
      interval: null,
      timelineSelection: { start: 0, end: 1 },
      player: null,
      stopAtSelection: false,
      videoPosition: 0,
      experimentalSetup: [],
      currentStep: 0,
      scratchpad: "",
      signs: [],
      latinSquare: [],
    };
  },
  methods: {
    setLiveVideoStream(stream) {
      const liveVideoElement = this.$refs.liveVideo;
      if (liveVideoElement) {
        liveVideoElement.srcObject = stream;
        liveVideoElement.play();
      }
    },
    updateSelection(newBoundaries) {
      if (this.timelineSelection.start !== newBoundaries.start || this.timelineSelection.end !== newBoundaries.end) {
        this.timelineSelection = newBoundaries;
        this.$saveAction("update_selection", {
          current_step: this.currentStep,
          start: this.timelineSelection.start * this.duration,
          end: this.timelineSelection.end * this.duration,
        });
      }
    },
    handleVideoUploaded(videoUrl) {
      console.log("handleVideoUploaded called with URL:", videoUrl);
      if (this.player) {
        this.player.src({ type: "video/mp4", src: videoUrl });
        this.player.ready(() => {
          console.log("Player is ready, attempting to play video.");
          this.player.play();
        });
      } else {
        console.error("Video.js player is not initialized.");
      }
    },
    changeTick(newPosition) {
      this.player.currentTime(newPosition * this.duration);
      this.videoPosition = newPosition;
    },
    generalPlay() {
      if (this.player) {
        this.playing ? this.player.pause() : this.player.play();
        this.stopAtSelection = false;
      }
    },
    selectionPlay() {
      if (this.player && !this.playing) {
        this.player.currentTime(this.selectionStart);
        this.stopAtSelection = true;
        this.player.play();
      }
    },
    loadCurrentStep() {
      if (this.currentStep >= this.experimentalSetup.length) {
        this.$router.push("/thank-you");
      } else {
        const stepData = this.experimentalSetup[this.latinSquare[this.currentStep]];
        this.signs = stepData.signs; // Assuming 'signs' is part of your step data
        // Load video or other step-specific actions here
      }
    },
    advanceStep() {
      this.currentStep++;
      this.loadCurrentStep();
    },
    handleUploadClick() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("video/")) {
        const videoUrl = URL.createObjectURL(file);
        this.$emit("video-uploaded", videoUrl);
      } else {
        alert("Please upload a valid video file.");
      }
    },
    createLatinSquare() {
      // Implementation for creating Latin Square based on uid or other criteria
    }
  },
  computed: {
    nextStepText() {
      return this.currentStep < this.experimentalSetup.length - 1 ? "Next video" : "Finish experiment";
    },
    // Other computed properties...
  },
  mounted() {
    fetch("/data/experiment_setup.json")
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        this.experimentalSetup = data;
        // Your logic after successfully fetching and processing the data
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });

    this.player = videojs(this.$refs.videoPlayer, this.options, function() {
      console.log("Player ready");
      // Additional player setup...
    });
  }, // <-- Missing comma was here
  beforeDestroy() {
    if (this.recording && this.mediaRecorder) {
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  },
};
</script>

<style src="video.js/dist/video-js.css"></style>
<style lang="scss">
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";

$header_height: 48px;
$timeline_height: 96px;
$videocontrol_height: 60px;
$scratchpad_height: 84px;
$general_padding: 6px;

header {
  grid-column: 1/ -1;
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content auto max-content;
  gap: 0.5rem;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: $general_padding;

  h1,
  h2 {
    color: white;
    @include fs(1);
  }
  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }
  #next-video {
    grid-column: 4;
  }
}

.controls-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}

#span-selection {
  display: grid;
  grid-template-rows:
    $header_height
    calc(
      100vh - #{$header_height + $timeline_height + $videocontrol_height +
        $scratchpad_height + 2 * $general_padding}
    )
    $scratchpad_height
    $timeline_height $videocontrol_height;
  grid-template-columns: auto 576px;

  background-color: black;
  padding: $general_padding;
}

#video-container {
  grid-column: 1;
  border: 1px solid #333;
  margin: 0 12px 12px 12px;
}

#video-controls-container {
  grid-column: 1 / -1;
  margin-top: 10px;
  background-color: #333;
  position: relative;
}

#timeline-container {
  display: grid;
  background-color: #000;
  padding: 12px;

  grid-column: 1 / -1;
}

#scratchpad {
  margin: 0 12px 24px 12px;
  display: grid;
  textarea {
    border-radius: 0.5rem;
    padding: 12px;
    @include fs(0);
    resize: none;
  }
}

#search-panel {
  background-color: $very-light-accent;
  border-radius: 4px;
  grid-row: 2 / span 2;
  grid-column: 2;

  overflow-y: scroll;

  margin-bottom: 24px;
  margin-right: 12px;
  padding: 12px;

  display: grid;
  grid-gap: 1rem;
  grid-template-rows: min-content auto;
}

#results {
  font-weight: 550;

  .result {
    background-color: rgba(255, 255, 255, 0.25);
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    font-size: 14px;
    color: white;

    &.header {
      background-color: transparent;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1ch;
      color: rgba(255, 255, 255, 0.8);
    }
    &:not(.header) {
      margin-top: 2px;
      border-radius: 0.125rem;
    }
    .signs {
    }
    .certainty {
      span {
        background-color: white;
        height: 0.5rem;
        display: block;
      }
    }
  }
}
</style>
