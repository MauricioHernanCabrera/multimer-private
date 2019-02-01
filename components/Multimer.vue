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
      <container>
        <multimer-list>
          <multimer-item v-for="timer in timersForId" :key="timer.id" :timer="timer"/>
        </multimer-list>

        <floating-bar justifyContentFlexEnd>
          <btn
            borderColor="licorice-3"
            backgroundColor="licorice-2"
            icon
            large
            @click="$store.commit('setPage', 'new-multimer')"
          >
            <icon>add</icon>
          </btn>
        </floating-bar>
      </container>
    </grid-item>
  </grid>
</template>

<script>


import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'
import Menu from '~/components/Menu'
import MultimerList from '~/components/MultimerList'
import MultimerItem from '~/components/MultimerItem'
import Btn from '~/components/Btn'
import Container from '~/components/Container'
import Icon from '~/components/Icon'
import FloatingBar from '~/components/FloatingBar'

import {
} from '~/helpers/types'

export default {
  components: {
    Btn,
    Icon,
    FloatingBar,
    Container,
    MultimerItem,
    MultimerList,
    Menu,
    Grid,
    GridItem
  },

  computed: {
    timersForId () {
      const timers = JSON.parse(JSON.stringify(this.$store.state.timers))

      return timers.sort((timerA, timerB) => timerA.id - timerB.id)
    }
  },
}
</script>

<style scoped>

</style>
