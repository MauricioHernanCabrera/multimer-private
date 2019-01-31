<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore quidem modi debitis qui, odio error iste nihil deserunt labore odit consequuntur quod esse enim tempora totam repudiandae. Doloribus, iste?

    <bt-floating-bar justifyContentFlexEnd>
        <!-- to="/multimer/new" -->
      <bt-btn
        color="blueberry-2"
        borderColor="cloud-2"
        backgroundColor="cloud-1"
        icon
        large
      >
        <bt-icon>add</bt-icon>
      </bt-btn>
    </bt-floating-bar>
  </div>
</template>

<script>


import BtBtn from '~/components/Btn'
import BtIcon from '~/components/Icon'
import BtFloatingBar from '~/components/FloatingBar'
import {
  newTimer
} from '~/helpers/types'

export default {
  components: {
    BtBtn,
    BtIcon,
    BtFloatingBar,
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
