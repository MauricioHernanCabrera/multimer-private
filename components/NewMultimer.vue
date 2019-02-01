<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'content']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header">
      <Menu withArrowBack title="New multimer"/>
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
      >
        REINICIAR
      </btn>
      <btn
        borderColor="kiwi-3"
        backgroundColor="kiwi-2"
        class="btn-add"
      >
        AGREGAR
      </btn>
    </floating-bar>
  </grid>
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
        minutes: 1,
        seconds: 0,
      },
      theme: 'banana',
      title: '',
    }
  },
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
