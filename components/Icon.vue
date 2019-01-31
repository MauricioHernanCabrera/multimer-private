<template>
  <i class="icon material-icons" :class="[fontSize]" :style="{ fontSize: this.size? `${this.size}px` : '' }">
    <slot></slot>
  </i>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },

    small: {
      type: Boolean,
      default: false,
    },

    size: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    fontSize () {
      return this.large? 'icon--large' : this.small? 'icon--small' : 'icon--medium'
    }
  }
}
</script>

<style scoped>

.icon {

}

.icon--small {
  font-size: 16px;
}
.icon--medium {
  font-size: 28px;
}
.icon--large {
  font-size: 36px;
}

</style>
