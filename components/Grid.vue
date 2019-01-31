<template>
    <!-- 'grid-template-areas': `'${areas.reduce((anterior, area) => `${anterior} ${area}`)}'`, -->
  <div class="grid" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    columns: {
      default: 1,
    },

    rows: {
      default: 1,
    },

    areas: {
      type: Array,
      default: ['base'],
    },

    gap: {
      type: Number,
      default: 10,
    },
  },

  data () {
    return {
      areaCal: '',
    }
  },

  methods: {
    calculateAreas () {
      let columns = this.columns

      if (typeof columns === 'string') {
        columns = this.columns.trim().split(' ')
      }

      let areas = ``

      for (let i=0; i<this.areas.length; i+=columns) {
        areas += `"`
        areas += this.areas.slice(i, columns + i).join(' ')
        areas += `" `
      }

      return areas.trim()
    },

    calculateRows () {
      if (typeof this.rows === 'number') {
        return `repeat(${this.rows}, 1fr)`
      } else {
        return `${this.rows}`
      }
    },

    calculateColumns () {
      if (typeof this.columns === 'number') {
        return `repeat(${this.columns}, 1fr)`
      } else {
        return `${this.columns}`
      }
    }
  },
  computed: {
    styleObject () {
      return {
        'grid-template-columns': this.calculateColumns(),
        'grid-template-rows': this.calculateRows(),
        'grid-template-areas': this.calculateAreas(),
        'gap': `${this.gap}px`
      }
    },
  }
}
</script>

<style scoped>

.grid {
  display: grid;
  justify-content: center;
}

</style>
