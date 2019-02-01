<template>
  <div>

    <multimer/>


    <transition
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated fadeOutRightBig"
    >
      <modal v-if="$store.state.page === 'new-multimer'">
        <new-multimer/>
      </modal>
    </transition>

    <transition
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated fadeOutRightBig"
    >
      <modal v-if="$store.state.page === 'edit-multimer'">
        <edit-multimer/>
      </modal>
    </transition>

    <transition
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated fadeOutRightBig"
    >
      <modal v-if="$store.state.page === 'history'">
        <history/>
      </modal>
    </transition>
  </div>
</template>

<script>

import Modal from '~/components/Modal'
import Multimer from '~/components/Multimer'
import NewMultimer from '~/components/NewMultimer'
import EditMultimer from '~/components/EditMultimer'
import History from '~/components/History'

export default {
  components: {
    NewMultimer,
    Multimer,
    Modal,
    EditMultimer,
    History,
  },
}
</script>

<style scoped>

</style>
