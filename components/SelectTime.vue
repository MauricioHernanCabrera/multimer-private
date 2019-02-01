<template>
  <div class="input-time">
    <ul class="list-of-time">
      <li
        class="item"
        :class="[{ 'selected': item.selected }, item.selected? `bg-${theme}-2` : '']"
        v-for="item in listOfTime"
        :key="item.value"
        :Value="item.value"
        @click="changeValue($event.target.value)">
        {{ item.value }}
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

    theme: {
      type: String,
    },

    value: {},
  },

  data () {
    return {
      listOfTime: []
    }
  },

  mounted () {
    for (let i = this.init; i <= this.finish; i++) {
      this.listOfTime.push({
        value: i,
        selected: false,
      })
    }
    this.listOfTime[0].selected = true

    const timeIndex = this.listOfTime.findIndex((item) => item.value === Number(this.value))
    if (timeIndex >= 0) {
      this.changeValue(this.value)
    }
  },

  methods: {
    changeValue (value) {
      this.$emit('input', Number(value))

      const timeIndex = this.listOfTime.findIndex((item) => item.value === Number(value))
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
  /* background: var(--color-blueberry-3); */
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
/* .input-time .list-of-time::-webkit-scrollbar-thumb:hover { */
  /* background: var(--color-blueberry-3); */
/* } */
</style>
