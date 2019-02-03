<template>
  <div class="container" :style="{
      paddingTop: paddingY? '20px' : '',
      paddingBottom: paddingY? '20px' : '',
      paddingLeft: paddingX? '20px' : '',
      paddingRight: paddingX? '20px' : '',
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    paddingX: {
      type: Boolean,
      default: true,
    },

    paddingY: {
      type: Boolean,
      default: true,
    },
  }
}
</script>

<style scoped>
.container {
  /* max-width: 1024px; */
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  box-sizing: border-box;
}

/* .wrapper {
  height: 100%;
} */

@media (max-width: 600px) {}
@media (max-width: 960px) {
  /* .container > div {
    padding: 10px 10px;
  } */
}
@media (max-width: 1264px) {}
@media (max-width: 1904px) {}
@media (min-width: 600px) {}


</style>
