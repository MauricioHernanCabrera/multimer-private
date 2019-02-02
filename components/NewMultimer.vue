<template>
  <form @submit.prevent="submitTimer" @reset.prevent="resetTimer">
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
          title="Nuevo multimer"
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
              v-model="hours">
            </select-time>

            <select-time
              slot="minutes"
              :theme="theme"
              :init="0"
              :finish="59"
              title="Minuto(s)"
              v-model="minutes">
            </select-time>

            <select-time
              slot="seconds"
              :theme="theme"
              :init="0"
              :finish="59"
              title="Segundo(s)"
              v-model="seconds">
            </select-time>
          </input-time>

          <input-color v-model="theme" style="margin-bottom: 75px;"/>

        </container>

      </grid-item>

      <floating-bar justifyContentFlexEnd backgroundColor="cloud-1" borderColor="cloud-2">
        <container class="floating-bar-container" :paddingY="false">
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
        </container>
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

  computed: {
    title: {
      get () {
        return this.$store.state.newTimer.title
      },

      set (title) {
        const payload = {
          title
        }
        this.$store.commit('updateNewTimer', payload)
      }
    },

    theme: {
      get () {
        return this.$store.state.newTimer.theme
      },

      set (theme) {
        const payload = {
          theme
        }
        this.$store.commit('updateNewTimer', payload)
      }
    },

    hours: {
      get () {
        return this.$store.state.newTimer.time.hours
      },

      set (hours) {
        const payload = {
          time: {
            ...this.$store.state.newTimer.time,
            hours
          }
        }
        this.$store.commit('updateNewTimer', payload)
      }
    },

    minutes: {
      get () {
        return this.$store.state.newTimer.time.minutes
      },

      set (minutes) {
        const payload = {
          time: {
            ...this.$store.state.newTimer.time,
            minutes
          }
        }
        this.$store.commit('updateNewTimer', payload)
      }
    },

    seconds: {
      get () {
        return this.$store.state.newTimer.time.seconds
      },

      set (seconds) {
        const payload = {
          time: {
            ...this.$store.state.newTimer.time,
            seconds
          }
        }
        this.$store.commit('updateNewTimer', payload)
      }
    },
  },

  methods: {
    submitTimer () {
      if (this.isValid()) {
        const { newTimer } = this.$store.state
        const payload = {
          time: Object.assign({}, newTimer.time),
          theme: newTimer.theme,
          title: newTimer.title,
          id: Date.now(),
          defaultTime: Object.assign({}, newTimer.time),
          active: false,
          interval: null,
        }

        const {
          hours,
          minutes,
          seconds
        } = newTimer.time

        ga('send', 'event', {
          eventCategory: 'Tiempo más elegido - Completo',
          eventAction: 'click',
          eventLabel: `${hours}:${minutes}:${seconds}`
        })

        ga('send', 'event', {
          eventCategory: 'Tiempo más elegido - Hora',
          eventAction: 'click',
          eventLabel: `${hours}`
        })

        ga('send', 'event', {
          eventCategory: 'Tiempo más elegido - Minutos',
          eventAction: 'click',
          eventLabel: `${minutes}`
        })

        ga('send', 'event', {
          eventCategory: 'Tiempo más elegido - Segundos',
          eventAction: 'click',
          eventLabel: `${seconds}`
        })

        ga('send', 'event', {
          eventCategory: 'Tiempo más elegido - Segundos',
          eventAction: 'click',
          eventLabel: `${seconds}`
        })


        const { title, theme } = newTimer

        ga('send', 'event', {
          eventCategory: 'Titulo más elegido',
          eventAction: 'click',
          eventLabel: `${title}`
        })

        ga('send', 'event', {
          eventCategory: 'Color más elegido',
          eventAction: 'click',
          eventLabel: `${theme}`
        })

        this.$store.commit('addTimer', payload)
        this.$store.commit('setPage', 'multimer')
        this.resetTimer()
      }
    },

    isValid () {
      return isRequired(this.$store.state.newTimer.title) &&
        timeToSeconds(this.$store.state.newTimer.time) > 0
    },

    resetTimer () {
      const payload = {
        time: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        theme: 'kiwi',
        title: ''
      }
      this.$store.commit('updateNewTimer', payload)
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

.header {
  position: sticky;
  top: 0;
  z-index: 150;
  background: var(--color-cloud-1);
}

.floating-bar-container {
  display: flex;
  justify-content: flex-end;
  background: var(--color-cloud-1);
  border-top: 2px solid var(--color-cloud-2);
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
