<template>
  <div class="input-color" v-if="listOfColor.length">
    <p class="title">Color</p>
    <grid
      class="list-of-color"
      columns="repeat(auto-fill, 75px)"
      :gap="10"
      :areas="[]"
    >
      <div
        class="item"
        :class="[`bg-${item.value}-2`, { 'selected': item.selected }]"
        v-for="item in listOfColor"
        :key="item.value"
        @click="changeValue(item.value)">
      </div>
    </grid>
  </div>
</template>

<script>

import {
  THEME
} from '~/helpers/const'

import Grid from '~/components/Grid'

export default {
  props: {
    value: {},
  },

  components: {
    Grid,
  },

  data () {
    return {
      listOfColor: []
    }
  },

  mounted () {
    this.listOfColor = THEME.map((t) => ({ value: t, selected: false }))
    this.listOfColor[0].selected = true

    console.log(this.value)
    const colorIndex = this.listOfColor.findIndex((item) => item.value === this.value)
    if (colorIndex >= 0) {
      this.changeValue(this.value)
    }
  },

  methods: {
    changeValue (value) {
      this.$emit('input', value)
      const colorIndex = this.listOfColor.findIndex((item) => item.value === value)
      const selectedIndex = this.listOfColor.findIndex((item) => item.selected)

      this.listOfColor[selectedIndex].selected = false
      this.listOfColor[colorIndex].selected = true
    }
  }
}
</script>

<style scoped>

..input-color {

}

.input-color .title {
  font-size: var(--fs-headline);
  margin: 0;
  margin-bottom: 10px;
}

.input-color .list-of-color {
  list-style: none;
  padding: 0;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, 77px);
  gap: 10px; */
}

.input-color .list-of-color .item {
  border-radius: 50px;
  height: 75px;
  width: 75px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.input-color .list-of-color .item:after,
.input-color .list-of-color .item.selected:after {
  transition: 1s;
}

.input-color .list-of-color .item:hover:after,
.input-color .list-of-color .item.selected:after {
  content: '';
  position: absolute;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 50%;
  border: 4px solid var(--color-cloud-3);
}

</style>
