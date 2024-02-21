<template>
  <div id="video-controls">
    <button id="general-play" @click="$emit('general-play')" class="button icon-bg" :class="generalPlayClass">&nbsp;</button>
    <button id="selection-play" @click="$emit('selection-play')" class="button" :class="{ pause: playingSelection, play: !playingSelection }">Play selection</button>
    <button @click="uploadVideo" class="button upload-button">
      <svg fill="currentColor" height="24px" width="24px" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
        <path d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
      </svg>
      Upload Video
    </button>
    <button @click="toggleRecording" class="button record-button">{{ recording ? "Stop Recording" : "Start Recording" }}</button>
    <p id="elapsed-time">
      <span class="hours" :class="{ 'less-than-an-hour': duration < 3600 }">{{ formattedTime.hours }}</span>:<span class="minutes" :class="{ 'less-than-a-minute': duration < 60 }">{{ formattedTime.minutes }}</span>:<span class="seconds">{{ formattedTime.seconds }}</span>.<span class="deciseconds">{{ formattedTime.deciseconds }}</span>
    </p>
  </div>
</template>




<script>
export default {
  name: "VideoControls",
  props: {
    playing: {
      type: Boolean,
      default: false,
    },
    playingSelection: {
      type: Boolean,
      default: false,
    },
    currentTime: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      // ... other existing data properties ...
      recording: false,
      mediaRecorder: null,
      recordedChunks: [],
    };
  },
  computed: {
    generalPlayClass: function () {
      if (!this.playing) {
        if (this.currentTime == this.duration) {
          return "reset";
        }
        return "play";
      }
      return "pause";
    },
    formattedTime: function () {
      let t = new Date(0);
      t.setSeconds(this.currentTime);
      let s = t.toISOString();
      return {
        hours: s.substr(11, 2),
        minutes: s.substr(14, 2),
        seconds: s.substr(17, 2),
        deciseconds: (this.currentTime % 1).toFixed(2).substring(2, 3),
      };
    },
  },
  methods: {
    async toggleRecording() {
      
      if (this.recording) {
        this.stopRecording();
      } else {
        await this.startRecording();
      }
    },
    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.recordedChunks.push(event.data);
          }
        };
        this.$emit('stream-obtained', stream);

        this.mediaRecorder.start();
        this.recording = true;

        // Attach the stream to the video element
        this.$refs.liveVideo.srcObject = stream;
        this.$refs.liveVideo.play(); // This might be redundant due to autoplay
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('video/')) {
        // Create a URL for the video file
        const videoUrl = URL.createObjectURL(file);
        // Emit an event with the video URL
        this.$emit('video-uploaded', videoUrl);
      } else {
        console.error('Please upload a valid video file.');
      }
    },

    stopRecording() {
      if (this.mediaRecorder) {
        this.mediaRecorder.stop();
        this.mediaRecorder.stream.getTracks().forEach(track => track.stop()); // Stop the camera stream
        this.mediaRecorder = null;
        this.recording = false;
      }
    },

    handleRecordedData() {
      // const recordedBlob = new Blob(this.recordedChunks, {type: "video/webm", });
      this.recordedChunks = [];
      // Handle the recorded video blob (e.g., preview, upload, etc.)
    },
    uploadVideo() {
      this.$emit("upload-video");
    },
  },
};
</script>












<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss"; // Ensure this import path is correct
@import "@/assets/styles/_mixins.scss";

#video-controls {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 12px;

}

#elapsed-time {
  @include fs(1);
  text-align: right;
  color: white;
  span {
    width: auto;
    display: inline-block;
    text-align: center;
    &.colon, &.period { display: inline; }
    &.deciseconds, &.less-than-an-hour, &.less-than-a-minute { color: #666; }
  }
}

.button {
  padding: 10px 15px;

  margin-right: 8px;
  background-color: #333;
  color: white;
  border-width: 1px;
  border-color: yellow;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: darken(#333, 10%);
    background-color: $accent;
      border-color: $accent;
      color: #333;
  }
  
  
  svg {
    fill: currentColor;
  }
}

.icon-bg {
  background-size: 16px 16px;
  background-position: center;
}

.upload-button svg, .record-button svg {
  margin-right: 5px;
}

button {
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  user-select: none;
  &#general-play {
    background-color: #666;
    padding-left: 2.25rem;
    padding-right: 2.25rem;
    &.play {
      background-image: url(play-icon());
      &:hover {
        background-image: url(play-icon(#666));
        border-color: white;
      }
    }
    &.pause {
      background-image: url(pause-icon());
      &:hover {
        background-image: url(pause-icon(#666));
      }
    }
    &.reset {
      background-image: url(reset-icon());
      &:hover {
        background-image: url(reset-icon(#666));
      }
    }
    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
  &#selection-play {
    &:hover {
      background-color: $accent;
      border-color: $accent;
      color: #333;
    }
  }


}

.upload-button {

  svg {
    height: 24px;
    width: 18px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; // Space between icon and text

  // Explicitly control the width and remove extra space
  width: fit-content;
  min-width: 0;

  // Remove any extra space around the content
  white-space: nowrap;
  
}
.icon-bg {
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position-y: center;
  background-position-x: center;
}
</style>
