<template>
  <div>

    <multimer/>

    <modal>
      <new-multimer/>
    </modal>

  </div>
</template>

<script>

import Modal from '~/components/Modal'
import Multimer from '~/components/Multimer'
import NewMultimer from '~/components/NewMultimer'

export default {
  components: {
    NewMultimer,
    Multimer,
    Modal,
  },
}
</script>

<style scoped>

</style>
