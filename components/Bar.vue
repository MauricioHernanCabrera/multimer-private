<template>
  <div class="bar">
    <!-- <div class="background" :class="[{ 'bg-cloud-3': progressActive }]"></div> -->
    <div class="background-base" :class="[{ 'bg-cloud-3': progressActive }]"></div>
    <div class="background-progress" :class="[`bg-${backgroundColor}`]" :style="{
      width: `${progress}%`
    }"></div>

    <div
      class="progress"
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
  bottom: -5px;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: -1;
  overflow: hidden;
}


.bar .background-progress {
  position: absolute;
  width: 10px;
  left: 0;
  height: 30px;
  bottom: -5px;
  transition: 1s;
}

.bar .progress {
  position: absolute;
  width: 10px;
  left: 0;
  height: 30px;
  bottom: -5px;
  transition: 1s;
  background-color: rgba(0, 0, 0, 0.1);
}

.bar .background-base {
  position: absolute;
  width: 100%;
  left: 0;
  height: 30px;
  bottom: -5px;
  transition: .5s;
}

</style>
