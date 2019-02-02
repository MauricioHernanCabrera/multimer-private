<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'content']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header" class="header">
      <Menu
        withArrowBack
        title="History multimer"
        @clickArrowBack="$store.commit('setPage', 'multimer')"
        @clickTitle="$store.commit('setPage', 'multimer')"
      />
    </grid-item>

    <grid-item area="content" key="content">
      <container>
        <history-list>
          <history-item
            v-for="history in $store.state.historyList"
            :key="history.key"
          ></history-item>
        </history-list>
      </container>
    </grid-item>
  </grid>
</template>

<script>

import HistoryList from '~/components/HistoryList'
import HistoryItem from '~/components/HistoryItem'
import Btn from '~/components/Btn'
import Icon from '~/components/Icon'
import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'
import Menu from '~/components/Menu'
import Container from '~/components/Container'

import {
  isRequired
} from '~/helpers/valid'

import {
  timeToSeconds
} from '~/helpers/time'



export default {
  components: {
    Btn,
    Icon,
    Grid,
    GridItem,
    Menu,
    Container,
    HistoryList,
    HistoryItem,
  },

  data () {
    return {
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
</style>
