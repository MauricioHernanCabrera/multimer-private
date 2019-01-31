<template>
  <div class="input-time">
    <ul class="list-of-time">
      <li
        class="item"
        :class="[{ 'selected': item.selected }]"
        v-for="item in listOfTime"
        :key="item.number"
        :Value="item.number"
        @click="changeValue">
        {{ item.number }}
      </li>
    </ul>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    init: {
      required: true,
      validator: (value) => {
        return typeof value === 'number' && value >= 0
      }
    },

    finish: {
      required: true,
      validator: (value) => {
        return typeof value === 'number' && value >= 0
      }
    },

    title: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      listOfTime: []
    }
  },

  mounted () {
    for (let i = this.init; i <= this.finish; i++) {
      this.listOfTime.push({
        number: i,
        selected: false,
      })
    }
    this.listOfTime[0].selected = true
  },

  methods: {
    changeValue (event) {
      this.$emit('input', Number(event.target.value))

      const timeIndex = this.listOfTime.findIndex((item) => item.number === Number(event.target.value))
      const selectedIndex = this.listOfTime.findIndex((item) => item.selected)
      this.listOfTime[selectedIndex].selected = false
      this.listOfTime[timeIndex].selected = true
    }
  }
}
</script>

<style scoped>
.input-time {}

.input-time .title {
  text-align: center;
  font-size: var(--fs-subheading);
}

.input-time .list-of-time {
  width: 100%;
  height: 204px;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  border: 2px solid var(--color-cloud-3);
  border-radius: 5px;
}

.input-time .list-of-time .item {
  padding: 10px;
  cursor: pointer;
  transition: .3s;
  font-size: var(--fs-title);
  font-weight: 700;
  user-select: none;
}

.input-time .list-of-time .item.selected {
  background: var(--color-blueberry-3);
  color: var(--color-creme);
}

/* width */
.input-time .list-of-time::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
.input-time .list-of-time::-webkit-scrollbar-thumb {
  background: var(--color-cloud-3);
}

/* Handle on hover */
.input-time .list-of-time::-webkit-scrollbar-thumb:hover {
  background: var(--color-blueberry-3);
}
</style>
