<template>
  <div>
    <multimer/>

    <modal v-if="$store.state.page === 'new-multimer'">
      <new-multimer/>
    </modal>

    <modal v-else-if="$store.state.page === 'edit-multimer'">
      <edit-multimer/>
    </modal>
  </div>
</template>

<script>

import Modal from '~/components/Modal'
import Multimer from '~/components/Multimer'
import NewMultimer from '~/components/NewMultimer'
import EditMultimer from '~/components/EditMultimer'

export default {
  components: {
    NewMultimer,
    Multimer,
    Modal,
    EditMultimer,
  },
}
</script>

<style scoped>

</style>
