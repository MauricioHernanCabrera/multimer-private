<template>
  <container>
    <multimer-list>
      <multimer-item :timer="timer"/>
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
</template>

<script>


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
  },

  data() {
    return {
      // newTimer,
      timer: {
        id: Date.now(),
        title: 'Pizza',
        time: {
          hours: 0,
          minutes: 0,
          seconds: 10
        },
        defaultTime: {
          hours: 0,
          minutes: 0,
          seconds: 10
        },
        active: false,
        interval: null,
        theme: 'kiwi',
      },
    }
  },



  methods: {
    removeTimer (timer) {

    },

    editTimer (timer) {

    },

    restartTimer (timer) {

    },

    stopTimer (timer) {

    },

    startTimer (timer) {

    },
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
