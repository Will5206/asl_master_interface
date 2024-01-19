<template>
  <div id="thanks">
    <p>Thank you for your participation in our study!</p>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";
#thanks {
  background-color: $very-light-accent;

  display: grid;
  align-items: center;
  justify-content: center;

  padding: 0 2rem 5rem 2rem;
}

p {
  @include fs(2);
}
</style>
