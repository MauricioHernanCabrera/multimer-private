<template>
  <div>
    <no-ssr>
      <transition
        enter-active-class="animated bounceInLeft p-absolute"
        leave-active-class="animated bounceOutLeft p-absolute"
      >
        <multimer v-if="$store.state.page === 'multimer'"/>
      </transition>

      <transition
        enter-active-class="animated bounceInRight p-absolute"
        leave-active-class="animated bounceOutRight p-absolute"
        mode="in-out"
      >
        <new-multimer v-if="$store.state.page === 'new-multimer'" key="new-multimer"/>
        <edit-multimer v-else-if="$store.state.page === 'edit-multimer'" key="edit-multimer"/>
        <history v-else-if="$store.state.page === 'history'" key="history"/>
      </transition>
    </no-ssr>
  </div>
</template>

<script>

import Modal from '~/components/Modal'
import Multimer from '~/components/Multimer'
import NewMultimer from '~/components/NewMultimer'
import EditMultimer from '~/components/EditMultimer'
import History from '~/components/History'
import {
  enableNotifications
} from '~/helpers/notifications'

export default {
  components: {
    NewMultimer,
    Multimer,
    Modal,
    EditMultimer,
    History,
  },

  mounted () {
    setTimeout(enableNotifications, 10000)
  },
}
</script>

<style scoped>
.p-absolute {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
