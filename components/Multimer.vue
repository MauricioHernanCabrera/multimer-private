<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'pages']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header" class="header">
      <Menu withHistory @clickHistory="$store.commit('setPage', 'history')"/>
    </grid-item>

    <grid-item area="pages" key="pages" class="pages">
      <container>
        <multimer-list>
          <multimer-item v-for="timer in timersForId" :key="timer.id" :timer="timer"/>
        </multimer-list>
      </container>
    </grid-item>

    <floating-bar>
      <container class="floating-bar-container" :paddingX="false" :paddingY="false">
        <div class="container-btn">
          <btn
            borderColor="licorice-3"
            backgroundColor="licorice-2"
            icon
            large
            @click="$store.commit('setPage', 'new-multimer')"
          >
            <icon>add</icon>
          </btn>
        </div>
        <!-- <div class="ads">
          Anuncio
        </div> -->
      </container>
    </floating-bar>
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
.header {
  position: sticky;
  top: 0;
  z-index: 150;
  background: var(--color-cloud-1);
}

.pages {
  margin-bottom: 50px;
}

.floating-bar-container {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.floating-bar-container .container-btn {
  padding: 20px;
}
.floating-bar-container .ads {
  background: var(--color-cloud-1);
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 300;
  border-top: 2px solid var(--color-cloud-2);
}


</style>
