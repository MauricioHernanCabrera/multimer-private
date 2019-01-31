<template>
  <bt-container class="container" :paddingY="false">
    <div class="menu">
      <nuxt-link to="/" class="title">Multimer</nuxt-link>
      <!-- <nav class="navigation">
        <ul class="list">
          <li class="list-item">
            <nuxt-link to="/">Multimer</nuxt-link>
          </li>
        </ul>
      </nav> -->
    </div>
  </bt-container>
</template>

<script>
import BtContainer from '~/components/Container'

export default {
  components: {
    BtContainer
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
}

.menu .title {
  font-size: var(--fs-headline);
  font-weight: 700;
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
