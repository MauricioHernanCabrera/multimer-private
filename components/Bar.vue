<template>
  <div class="bar" :class="[{ 'bg-cloud-3': progressActive }]">
    <div
      class="progress"
      :class="[`bg-${backgroundColor}`]"
      :style="{
        width: `${progress}%`
      }"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {},
    progress: {},
    progressActive: {},
  }
}
</script>

<style scoped>

.bar {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: -6px;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: -1;
  overflow: hidden;
}

.bar .progress {
  position: absolute;
  width: 10px;
  left: 0;
  height: 30px;
  bottom: -6px;
  transition: 1s;
}

</style>
