<template>
  <div id="search-result">
    <div class="img-container" :class="{ loaded: imgHasLoaded }">
      <img :src="imgSrc" id="sign-img" alt="" />

      <div class="expanded-info" v-show="showInfo">
        <p><strong>Hands: </strong>{{ hands != "" ? hands : "Unknown" }}</p>
        <p>
          <strong>Handshape: </strong
          >{{ handshape != "" ? handshape : "Unknown" }}
        </p>
        <p>
          <strong>Location: </strong>{{ location != "" ? location : "Unknown" }}
        </p>
        <p>
          <strong>Movement: </strong>{{ movement != "" ? movement : "Unknown" }}
        </p>
      </div>
    </div>
    <div class="sign-description">
      <a class="info" @mouseover="showInfo = true" @mouseout="showInfo = false"
        ><span
      /></a>
      <p class="sign-name">{{ formattedSign }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {
      showInfo: false,
      imgHasLoaded: false,
    };
  },
  methods: {},
  mounted() {},
  computed: {
    formattedSign: function () {
      return this.sign.charAt(0).toUpperCase() + this.sign.slice(1);
    },
  },
  props: {
    sign: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    hands: {
      type: String,
      default: "",
    },
    handshape: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    movement: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

#search-result {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.img-container {
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  aspect-ratio: 4/3;
  img {
    width: 100%;
  }
}

.sign-description {
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0.5rem;
}

.expanded-info {
  position: absolute;
  inset: 0.25rem;
  border-radius: 0.25rem;
  background-color: $transp-light-accent;
  backdrop-filter: blur(8px);
  padding: 0.5rem;

  p {
    @include fs(-1);
    line-height: 1.1;

    & + p {
      margin-top: 0.5rem;
    }
    strong {
      font-weight: 700;
    }
  }
}

.info {
  span {
    display: inline-block;
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
    cursor: help;
    background-size: contain;
    background-image: url(info-circle-icon(#6363e7));
  }
}

.sign-name {
  @include fs(-1);
  font-weight: 400;
}
</style>
