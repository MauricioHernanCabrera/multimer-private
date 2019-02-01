<template>
  <container class="container" :paddingY="false">
    <div class="menu">
      <div>
        <nuxt-link v-if="withArrowBack" to="/" class="arrow-back"><icon>arrow_back</icon></nuxt-link>

        <nuxt-link to="/" class="title">{{ title }}</nuxt-link>
      </div>
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
  },

  components: {
    Container,
    Icon,
  }
}
</script>

<style scoped>

.container {
  box-shadow: 0px 2px var(--color-cloud-2);
}

.menu {
  /* border: 2px solid red; */
  /* height: 54px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
}

.menu .title {
  font-size: var(--fs-headline);
  font-weight: 700;
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
