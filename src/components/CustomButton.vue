<template>
  <div :class="size">
    <div
      id="but-cont"
      @click="butClick()"
      :class="{ disabled: disabledButton }"
    >
      <!-- @click on container div solution from https://forum.vuejs.org/t/make-native-event-modifier-conditional/82730/6 -->
      <a
        :class="{ disabled: disabledButton, 'has-border': hasBorder }"
        :is="!!href ? `router-link` : `a`"
        :to="!!href ? href : false"
      >
        <slot></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    href: { type: String, default: "" },
    size: { type: String, default: "large" },
    hasBorder: { type: Boolean, default: false },
    disabledButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    butClick: function () {
      if (!this.disabledButton) {
        this.$emit("clicked");
      }

    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.large a {
  padding: 0.9rem 2rem 1rem;
  @include fs(1);
}

.small a {
  padding: 1rem 2.5rem;
  @include fs(0);
}

a {
  float: right;
  display: block;
  background: $dark-accent;
  color: white;
  border: 2px solid transparent;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: 0.15s all ease;

  user-select: none;

  font-weight: 500;
  cursor: pointer;

  &:not(.disabled):hover {
    background: black;
    &.has-border {
      border-color: $dark-accent;
    }
  }
  &.disabled {
    cursor: not-allowed;
    background-color: transparent;
    color: #ccc;
    border-color: #bbb;
  }
}

#but-container {
  float: right;

}

.disabled {
  pointer-events: none;
}
</style>
