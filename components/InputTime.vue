<template>
  <div class="time">
    <p class="title">Time</p>
    <grid
      :columns="columns"
      :rows="1"
      :areas="['hours', 'minutes', 'seconds']"
    >
      <grid-item area="hours" key="hours">
        <slot name="hours"></slot>
      </grid-item>

      <grid-item area="minutes" key="seconds">
        <slot name="minutes"></slot>
      </grid-item>

      <grid-item area="seconds" key="minutes">
        <slot name="seconds"></slot>
      </grid-item>
    </grid>
  </div>
</template>

<script>

import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'

export default {
  components: {
    Grid,
    GridItem,
  },

  data () {
    return {
      columns: 3,
    }
  },

  mounted () {
    window.addEventListener('resize', this.resizeGrid)
    this.resizeGrid()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeGrid)
  },

  methods: {
    resizeGrid (event) {
      const { innerWidth } = window

      if (innerWidth <= 300) {
        this.columns = 1
      } else {
        this.columns = 3
      }
    }
  }
}
</script>

<style scoped>

.time .title {
  font-size: var(--fs-headline);
  margin: 0;
  margin-bottom: 5px;
}

.time {
  margin-bottom: 20px;
}

</style>
