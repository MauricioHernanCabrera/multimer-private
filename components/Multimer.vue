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
          <multimer-item v-for="timer in $store.state.timers" :key="timer.id" :timer="timer"/>
        </multimer-list>

        <floating-bar justifyContentFlexEnd>
          <btn
            borderColor="licorice-3"
            backgroundColor="licorice-2"
            icon
            large
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

  data () {
    return {
    }
  },

  methods: {

    // submitNewTimer () {
    //   const cloneNewTimer = JSON.parse(JSON.stringify(this.newTimer))

    //   const timer = Object.assign({}, cloneNewTimer, {
    //     defaultTime: cloneNewTimer.time,
    //     active: false,
    //     interval: null,
    //     id: Date.now()
    //   })

    //   // this.$store.commit('multimer/addTimer', timer)

    //   this.newTimer = Object.assign({}, newTimer)
    // }
  },
}
</script>

<style scoped>

</style>
