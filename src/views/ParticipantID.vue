<template>
    <div id="participant-id">
      <label for="participants-code">Participant code</label>
      <input id="participants-code" v-model="id" type="text" />
      <custom-button @clicked="submit()">Submit</custom-button>
    </div>
  </template>
  
  <script>
  import CustomButton from '../components/CustomButton.vue';
  
  export default {
    name: 'ParticipantID',
    components: { CustomButton },
    data() {
      return {
        id: '',
      };
    },
    methods: {
      submit: function () {
        this.$saveAction('participant_code', { id: this.id }).then((success) => {
          if (success) {
            this.$router.push('/screen-calibration');
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/_variables.scss';
  @import '@/assets/styles/_mixins.scss';
  
  #participant-id {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  label {
    @include fs(1);
  }
  
  input {
    @include fs(1);
    border: 1px solid $dark-accent;
    box-sizing: border-box;
    margin: 1rem 0 3rem;
    padding: 1rem;
    text-align: center;
    border-radius: 0.25rem;
    min-width: 30ch;
  }
  </style>