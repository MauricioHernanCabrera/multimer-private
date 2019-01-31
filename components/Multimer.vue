<template>
  <container>
    <grid
      :columns="3"
      :areas="[]"
      :gap="0"
    >
    </grid>

    <floating-bar justifyContentFlexEnd>
      <btn
        color="blueberry-2"
        borderColor="cloud-2"
        backgroundColor="cloud-1"
        icon
        large
      >
        <icon>add</icon>
      </btn>
    </floating-bar>
  </container>
</template>

<script>


import Btn from '~/components/Btn'
import Grid from '~/components/Grid'
import Container from '~/components/Container'
import Icon from '~/components/Icon'
import FloatingBar from '~/components/FloatingBar'

import {
  newTimer
} from '~/helpers/types'

export default {
  components: {
    Grid,
    Btn,
    Icon,
    FloatingBar,
    Container,
  },

  data() {
    return {
      newTimer,
    }
  },

  methods: {
    submitNewTimer () {
      const cloneNewTimer = JSON.parse(JSON.stringify(this.newTimer))

      const timer = Object.assign({}, cloneNewTimer, {
        defaultTime: cloneNewTimer.time,
        active: false,
        interval: null,
        id: Date.now()
      })

      // this.$store.commit('multimer/addTimer', timer)

      this.newTimer = Object.assign({}, newTimer)
    }
  },

  computed: {
    uniqueAreas (a){
      return [...new Set(this.areas)]
    }
  }
}
</script>

<style scoped>

</style>
