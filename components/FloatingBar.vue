<template>
  <div class="floating-bar" :class="[
    top? 'floating-bar--top' : '',
    bottom? 'floating-bar--bottom' : '',
    left? 'floating-bar--left' : '',
    right? 'floating-bar--right' : '',
  ]">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    top: {
      type: Boolean,
      default: false
    },

    bottom: {
      type: Boolean,
      default: true
    },

    left: {
      type: Boolean,
      default: false
    },

    right: {
      type: Boolean,
      default: true
    },

    backgroundColor: {
      type: String,
      default: 'transparent'
    },

    borderColor: {
      type: String,
      default: 'transparent'
    },
  },
}
</script>

<style scoped>
.floating-bar {
  position: fixed;
  display: flex;
}

.floating-bar--top {
  top: 0;
}
.floating-bar--bottom {
  bottom: 0;
}
.floating-bar--left {
  left: 0;
}
.floating-bar--right {
  right: 0;
}

@media (max-height: 350px) {
  .floating-bar {
    position: relative;
  }
}
</style>
