<template>
  <div
    class="history-item"
    :class="[`bg-${history.theme}-2`]"
  >
    <span class="message">{{ history.message }}</span>
    <span class="created">{{ history.created | timeFormat }}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    history: {
      type: Object,
      required: true
    }
  },


  filters: {
    timeFormat (date) {
      return moment(date).startOf('seconds').fromNow()
    }
  }
}
</script>

<style scoped>

.history-item {
  padding: 20px;
  border-radius: 10px;
  color: var(--color-creme);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.history-item .message {
  font-weight: 700;
  font-size: var(--fs-subheading);
}
.history-item .created {
  font-size: var(--fs-caption);
}


</style>
