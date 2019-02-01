<template>
  <i
    class="icon material-icons"
    :class="[fontSize, { 'c-pointer': cursorPointer }, { 'icon--disabled': disabled }]"
    :style="{ fontSize: this.size? `${this.size}px` : '' }"
    :disabled="disabled">
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

    cursorPointer: {
      type: Boolean,
      default: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    fontSize () {
      return this.large? 'icon--large' : this.small? 'icon--small' : 'icon--medium'
    }
  }
}
</script>

<style scoped>

.icon {}

.icon--disabled {
  cursor: not-allowed;
  color: var(--color-cloud-1);
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
