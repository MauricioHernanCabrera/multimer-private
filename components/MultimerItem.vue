<template>
  <div class="multimer-item" :class="[`bg-${timer.theme}-2`]">
    <bar
      :backgroundColor="`${timer.theme}-3`"
      :progressActive="timer.active"
      :progress="percentageOfTime(timer.time, timer.defaultTime)"
    />

    <div class="timer-header">
      <h2 class="title">{{ timer.title }}</h2>

      <div v-if="!timer.active" class="actions">

        <icon @click="$emit('removeTimer', timer)">
          delete
        </icon>

        <icon @click="$emit('editTimer', timer)">
          edit
        </icon>

        <!-- <Link
          route="multimer-edit"
          params={{
            id: timer.get('id')
          }}>
          <a>
            <icon
              name="edit"
              color="creme"
              cursorPointer={true}/>
          </a>
        </Link> -->

      </div>
    </div>


    <p class="time-text">
      <span>{{ timer.time.hours | leftPad }}h</span>
      <span>{{ timer.time.minutes | leftPad }}m</span>
      <span>{{ timer.time.seconds | leftPad }}s</span>
    </p>


    <div class="time-actions">
      <btn
        :backgroundColor="`${timer.theme}-2`"
        :borderColor="`${timer.theme}-3`"
        @click="$emit('restartTimer', timer)">
        <icon>
          stop
        </icon>
      </btn>

      <btn
        v-if="timer.active"
        :backgroundColor="`${timer.theme}-2`"
        :borderColor="`${timer.theme}-3`"
        @click="$emit('stopTimer', timer)">
        <icon>
          pause
        </icon>
      </btn>

      <btn
        v-else
        :backgroundColor="`${timer.theme}-2`"
        :borderColor="`${timer.theme}-3`"
        @click="$emit('startTimer', timer)">
        <icon>
          play_arrow
        </icon>
      </btn>
    </div>
  </div>
</template>

<script>

import Icon from '~/components/Icon'
import Btn from '~/components/Btn'
import Bar from '~/components/Bar'

import {
  percentageOfTime,
  leftPad,
} from '~/helpers/time'

export default {
  props: {
    timer: {
      type: Object,
      required: true
    }
  },

  components: {
    Icon,
    Btn,
    Bar,
  },

  methods: {
    percentageOfTime,
  },

  filters: {
    leftPad,
  }
}
</script>

<style scoped>


.multimer-item {
  color: white;
  padding: 20px;
  border-radius: 10px;
  grid-row-end: span 1;
  user-select: none;
  position: relative;
}

.multimer-item .timer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.multimer-item .timer-header .title {
  margin: 0;
  flex: 1;
  margin: 0;
  font-weight: 700;
  font-size: var(--fs-subheading);
}

.multimer-item .timer-header .actions {
  align-self: start;
}

.multimer-item .time-text {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  margin: 10px 0;
}
  {/* font-size: var(--fs-display-1); */}

.multimer-item .time-text span {}
.multimer-item .time-text span:after {
  content: ":";
  margin: 0 4px;
}

.multimer-item .time-text span:nth-child(3):after {
  content: "/";
}

.multimer-item .time-text span:last-child:after {
  display: none;
}
.multimer-item .time-actions {
  display: flex;
}

.multimer-item .time-actions > button {
  margin-right: 4px;
}

</style>
