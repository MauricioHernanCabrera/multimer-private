<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'pages']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header">
      <Menu/>
    </grid-item>

    <grid-item area="pages" key="pages">
      <nuxt class="pages"/>
    </grid-item>
  </grid>
</template>


<script>

import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'
import Container from '~/components/Container'
import Menu from '~/components/Menu'

export default {
  components: {
    Container,
    Menu,
    Grid,
    GridItem,
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
