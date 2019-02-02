<template>
  <grid
    :columns="1"
    :gap="10"
    :areas="[]"
    class="history-list"
  >
    <slot>
      Aun no hay temporizadores terminados
    </slot>
  </grid>
</template>

<script>

import Grid from '~/components/Grid'

export default {
  components: {
    Grid
  }
}
</script>

<style scoped>
.history-list {}
</style>
