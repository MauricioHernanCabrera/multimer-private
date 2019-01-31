<template>
  <div class="grid-item" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      required: true,
    }
  },

  computed: {
    styleObject () {
      return {
        'grid-area': `${this.area}`
      }
    }
  }
}
</script>

<style scoped>
.grid-item {
  /* border: 1px solid red; */
}
</style>
