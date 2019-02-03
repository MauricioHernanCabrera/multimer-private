<template>
  <container class="container" :paddingY="false">
    <div class="menu">
      <div>
        <a v-if="withArrowBack" to="/" class="arrow-back" @click="$emit('clickArrowBack')"><icon>arrow_back</icon></a>

        <a class="title" @click="$emit('clickTitle')">{{ title }}</a>
      </div>

      <a class="history" @click="$emit('clickTitle')" v-if="withHistory">
        <btn
          onlyBorderBottom
          borderColor="licorice-3"
          backgroundColor="licorice-2"
          @click="$emit('clickHistory')"
        >
          <icon style="margin-right: 2px;">history</icon>
          Historical
        </btn>
      </a>
      <!-- <nav class="navigation">
        <ul class="list">
          <li class="list-item">
            <nuxt-link to="/">Multimer</nuxt-link>
          </li>
        </ul>
      </nav> -->
    </div>
  </container>
</template>

<script>
import Container from '~/components/Container'
import Icon from '~/components/Icon'
import Btn from '~/components/Btn'

export default {
  props: {
    title: {
      type: String,
      default: 'Multimer',
    },

    withArrowBack: {
      type: Boolean,
      default: false,
    },

    withHistory: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Container,
    Icon,
    Btn,
  }
}
</script>

<style scoped>
/*
.header {
} */

.container {
  box-shadow: 0px 2px var(--color-cloud-2);
}

.menu {
  /* border: 2px solid red; */
  /* height: 54px; */
  /* position: sticky; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu .title {
  font-size: var(--fs-headline);
  font-weight: 700;
  cursor: pointer;
}

.menu > div {
  display: flex;
  align-items: center;
}
.menu > div > .arrow-back {
  display: flex;
  align-items: center;
  margin: 0 5px 0 0;
  cursor: pointer;
}

/* .menu .navigation {
  display: flex;
}

.menu .navigation .list {
  display: flex;
  align-items: center;
}

.menu .navigation .list .list-item {}

.menu .navigation .list .list-item nuxt-link {} */

</style>
