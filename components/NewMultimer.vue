<template>
  <grid
    :columns="1"
    rows="54px 1fr"
    :areas="['header', 'content']"
    :gap="0"
    class="layout"
  >
    <grid-item area="header" key="header">
      <Menu withArrowBack title="Nuevo Temporizador"/>
    </grid-item>

    <grid-item area="content" key="content">
      <container>
        <input class="input-title" type="text" placeholder="Titulo">

        <div class="time">
          <p class="title">Tiempo</p>
          <grid
            :columns="3"
            :rows="1"
            :areas="['hours', 'minutes', 'seconds']"
          >
            <grid-item area="hours" key="hours">
              <input-time
                :init="0"
                :finish="23"
                title="Hora(s)"
                v-model="time.hours">
              </input-time>
            </grid-item>

            <grid-item area="minutes" key="minutes">
              <input-time
                :init="0"
                :finish="59"
                title="Minuto(s)"
                v-model="time.minutes">
              </input-time>
            </grid-item>

            <grid-item area="seconds" key="seconds">
              <input-time
                :init="0"
                :finish="59"
                title="Segundo(s)"
                v-model="time.seconds">
              </input-time>
            </grid-item>
          </grid>
        </div>

        <input-color v-model="theme"/>

      </container>

    </grid-item>
  </grid>
</template>

<script>

import Grid from '~/components/Grid'
import GridItem from '~/components/GridItem'
import Menu from '~/components/Menu'
import InputTime from '~/components/InputTime'
import InputColor from '~/components/InputColor'
import Container from '~/components/Container'

export default {
  components: {
    Grid,
    GridItem,
    Menu,
    InputTime,
    Container,
    InputColor,
  },

  data () {
    return {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      theme: 0
    }
  }
}
</script>

<style scoped>
.input-title {
  width: 100%;
  border: 0;
  background-color: transparent;
  font-size: var(--fs-headline);
  padding: 10px 0;
  outline: 0;
  border-bottom: 2px solid var(--color-cloud-3);
  margin-bottom: 20px;
}

.time .title {
  font-size: var(--fs-headline);
  margin: 0;
  margin-bottom: 5px;
}

.time {
  margin-bottom: 20px;
}
</style>
