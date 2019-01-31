<template>
  <bt-grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'pages']"
    :gap="0"
    class="layout"
  >
    <bt-grid-item area="header" key="header">
      <bt-menu/>
    </bt-grid-item>

    <bt-grid-item area="pages" key="pages">
      <bt-container class="content">
        <nuxt class="pages"/>
      </bt-container>
    </bt-grid-item>
  </bt-grid>
</template>


<script>

import BtGrid from '~/components/Grid'
import BtGridItem from '~/components/GridItem'

import BtContainer from '~/components/Container'
import BtMenu from '~/components/Menu'

export default {
  components: {
    BtContainer,
    BtMenu,
    BtGrid,
    BtGridItem,
  }
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
