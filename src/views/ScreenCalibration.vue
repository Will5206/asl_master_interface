<template>
    <div id="screen-calibration">
      <p>
        Please adjust your browser window to a comfortable size where all 4 arrows
        touch the edge of the window.
      </p>
      <p>When you're ready, click ‘Next.’</p>
      <CustomButton @clicked="submit()">Next</CustomButton>
      <div id="screen-ratio">
        <div class="arrow north west">↖</div>
        <div class="arrow north east">↗</div>
        <div class="arrow south west">↙</div>
        <div class="arrow south east">↘</div>
      </div>
    </div>
  </template>
  
  <script>
  import CustomButton from '@/components/CustomButton.vue';
  export default {
    name: 'ScreenCalibration',
    components: { CustomButton },
    methods: {
      submit: function () {
        this.$saveAction('calibrated_screen', {
          width: window.innerWidth,
          height: window.innerHeight,
        }).then((success) => {
          if (success) {
            this.$router.push('/video');
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/_variables.scss';
  @import '@/assets/styles/_mixins.scss';
  
  #screen-calibration {
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    gap: 2rem;
  
    & > *:not(#screen-ratio) {
      position: relative;
      z-index: 1;
    }
  }
  
  p {
    @include fs(2);
    max-width: 30ch;
    text-align: center;
  }
  
  #screen-ratio {
    position: fixed;
    background-color: white;
    border-radius: 5px;
    top: 5px;
    left: 5px;
    right: 5px;
    height: calc(58vw - 10px);
    z-index: 0;
  }
  
  .arrow {
    $p: 1rem;
    position: absolute;
    font-weight: 400;
    @include fs(13);
    &.north {
      top: $p;
    }
    &.south {
      bottom: $p;
    }
    &.east {
      right: -$p;
    }
    &.west {
      left: -$p;
    }
  }
  </style>