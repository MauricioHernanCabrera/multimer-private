<template>
  <form @submit.prevent="submitTimer" @reset.prevent="resetTimer">
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
          title="New multimer"
          @clickArrowBack="$store.commit('setPage', 'multimer')"
          @clickTitle="$store.commit('setPage', 'multimer')"
        />
      </grid-item>

      <grid-item area="content" key="content">
        <container>
          <input-title v-model="title"/>

          <input-time>
            <select-time
              slot="hours"
              :theme="theme"
              :init="0"
              :finish="23"
              title="Hora(s)"
              v-model="time.hours">
            </select-time>

            <select-time
              slot="minutes"
              :theme="theme"
              :init="0"
              :finish="59"
              title="Minuto(s)"
              v-model="time.minutes">
            </select-time>

            <select-time
              slot="seconds"
              :theme="theme"
              :init="0"
              :finish="59"
              title="Segundo(s)"
              v-model="time.seconds">
            </select-time>
          </input-time>

          <input-color v-model="theme" style="margin-bottom: 100px;"/>

        </container>

      </grid-item>

      <floating-bar justifyContentFlexEnd backgroundColor="cloud-1" borderColor="cloud-2">
        <btn
          borderColor="raspberry-3"
          backgroundColor="raspberry-2"
          class="btn-reset"
          type="reset"
        >
          REINICIAR
        </btn>
        <btn
          borderColor="kiwi-3"
          backgroundColor="kiwi-2"
          class="btn-add"
          type="submit"
          :disabled="!isValid()"
        >
          AGREGAR
        </btn>
      </floating-bar>
    </grid>
  </form>
</template>

<script>

import InputTime from '~/components/InputTime'
import Btn from '~/components/Btn'
import Icon from '~/components/Icon'
import FloatingBar from '~/components/FloatingBar'
import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'
import Menu from '~/components/Menu'
import SelectTime from '~/components/SelectTime'
import InputColor from '~/components/InputColor'
import InputTitle from '~/components/InputTitle'
import Container from '~/components/Container'

import {
  isRequired
} from '~/helpers/valid'

import {
  timeToSeconds
} from '~/helpers/time'

export default {
  components: {
    Grid,
    GridItem,
    Menu,
    SelectTime,
    Container,
    InputColor,
    InputTitle,
    FloatingBar,
    Btn,
    Icon,
    InputTime,
  },

  data () {
    return {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      theme: 'kiwi',
      title: '',
    }
  },

  methods: {
    submitTimer () {
      if (this.isValid()) {
        const payload = {
          time: Object.assign({}, this.time),
          theme: this.theme,
          title: this.title,
          id: Date.now(),
          defaultTime: Object.assign({}, this.time),
          active: false,
          interval: null,
        }
        this.$store.commit('addTimer', payload)
        this.$store.commit('setPage', 'multimer')
      }
    },

    isValid () {
      return isRequired(this.title) &&
        timeToSeconds(this.time) > 0
    },

    resetTimer () {
      this.time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
      this.theme = 'kiwi'
      this.title = ''
    },
  }
}
</script>

<style scoped>

.btn-reset {
  margin-right: 5px;
}
.btn-add {
  margin-left: 5px;
}

</style>
