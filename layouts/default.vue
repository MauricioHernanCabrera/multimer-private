<template>
  <grid
    :columns="1"
    rows="1fr"
    :areas="['pages']"
    :gap="0"
    class="layout"
  >
    <grid-item area="pages" key="pages" class="pages">
      <nuxt class="pages"/>
    </grid-item>
  </grid>
</template>


<script>

import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'

export default {
  components: {
    Grid,
    GridItem,
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
  position: relative;
}
.pages {
  width: 100%;
}
</style>
