<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'content']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header">
      <Menu
        withArrowBack
        title="History multimer"
        @clickArrowBack="$store.commit('setPage', 'multimer')"
        @clickTitle="$store.commit('setPage', 'multimer')"
      />
    </grid-item>

    <grid-item area="content" key="content">
      <container>
        <div class="history-list">
          <div
            class="history-item"
            v-for="history in $store.state.historyList"
            :key="history.key"
            :class="[`bg-${history.theme}-2`]"
          >
            <span class="message">{{ history.message }}</span>
            <span class="created">{{ history.created | timeFormat }}</span>
          </div>
        </div>
      </container>
    </grid-item>
  </grid>
</template>

<script>

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

import moment from 'moment'

export default {
  components: {
    Btn,
    Icon,
    Grid,
    GridItem,
    Menu,
    Container,
  },

  data () {
    return {
    }
  },

  filters: {
    timeFormat (date) {
      return moment(date).startOf('seconds').fromNow();
    }
  }
}
</script>

<style scoped>

.history-list {}
.history-item {
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  color: var(--color-creme);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.history-item .message {
  font-weight: 700;
  font-size: var(--fs-subheading);
}
.history-item .created {
  font-size: var(--fs-caption);

}
</style>
