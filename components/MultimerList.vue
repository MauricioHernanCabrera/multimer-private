<template>
  <grid
    :columns="columns"
    :areas="[]"
    :gap="10"
  >
    <slot>
      There are no loaded timers
    </slot>
  </grid>
</template>

<script>
import Grid from '~/components/Grid'
export default {
  components: {
    Grid
  },

  data () {
    return {
      columns: 3,
    }
  },

  mounted () {
    this.resizeGrid()
    window.addEventListener('resize', this.resizeGrid)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeGrid)
  },

  methods: {
    resizeGrid (event) {
      const { innerWidth } = window

      if (innerWidth <= 576) {
        this.columns = 1
      } else if (innerWidth <= 768) {
        this.columns = 2
      } else {
        this.columns = 3
      }
    }
  }
}
</script>

<style scoped>

</style>
