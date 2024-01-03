<template>
    <div>{{ preparedJson }}</div>
  </template>
  
  <script>
  import __signs__ from '@/assets/data/signs.json';
  export default {
    name: 'JsonMaker',
    data() {
      return {
        signs: __signs__.signs,
        videoDuration: 30,
        signDuration: 1,
        signsPerSecond: 10,
      };
    },
    computed: {
      preparedJson: function () {
        let selection = [];
        for (let i = 0; i < this.videoDuration; i++) {
          for (let j = 0; j < this.signsPerSecond; j++) {
            let temp = this.randomSign();
            let sign = {
              start: this.jitteredSecond(i * this.signDuration),
              end: this.jitteredSecond((i + 1) * this.signDuration),
              sign: temp.sign,
              img_src: temp.img_src,
              hands: temp.hands,
              handshape: temp.handshape,
              location: temp.location,
              movement: temp.movement,
              certainty: Math.random(),
            };
            selection.push(sign);
          }
        }
  
        return { signs: selection };
      },
    },
    methods: {
      randomSign: function () {
        let i = Math.round(Math.random() * this.signs.length);
        return this.signs[i];
      },
      jitteredSecond: function (s) {
        let jitterRange = 0.3;
        return Math.min(
          Math.max(s + (Math.random() * jitterRange - jitterRange / 2), 0),
          this.videoDuration
        );
      },
    },
  };
  </script>