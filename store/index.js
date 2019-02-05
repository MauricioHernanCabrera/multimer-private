import {
  findById,
  findIndexById,
  finishedTheTimer,
  leftPad,
} from '~/helpers/time'
import {
  newTimer,
  PATTERN_VIBRATE_FINISH_TIMER,
  PATTERN_VIBRATE_START_TIMER
} from '~/helpers/const'
import {
  showNotification,
  enableNotifications
} from '~/helpers/notifications'
import { vibrate } from '~/helpers/vibrate'
import { sayMessage } from '~/helpers/voice'
import { actionOfTimer } from '~/helpers/ga'

export const state = () => ({
  editTimer: {},

  historyList: [],

  newTimer,

  page: 'multimer',

  timers: [
    // {
    //   id: 1,
    //   title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'kiwi'
    // },
    // {
    //   id: 2,
    //   title: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'blueberry'
    // },
    // {
    //   id: 3,
    //   title: 'cccccccccccccccccccccccccccccccccccccccccccccccccc',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'banana'
    // },
    // {
    //   id: 4,
    //   title: 'dddddddddddddddddddddddddddddddddddddddddddddddddd',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'pumpkin'
    // },
    // {
    //   id: 5,
    //   title: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'raspberry'
    // },
    // {
    //   id: 6,
    //   title: 'ffffffffffffffffffffffffffffffffffffffffffffffffff',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'jelly'
    // },
    // {
    //   id: 7,
    //   title: 'gggggggggggggggggggggggggggggggggggggggggggggggggg',
    //   time: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   defaultTime: {
    //     hours: 0,
    //     minutes: 0,
    //     seconds: 10,
    //   },
    //   active: false,
    //   interval: null,
    //   theme: 'cocoa'
    // },
  ],
})

export const getters = {
  ////////////////////////////////////// TIMER
  timer: ({ timers }) => (id) => {
    return findById(timers, id)
  }
}

export const mutations = {
  ////////////////////////////////////// EDIT TIMER

  setEditTimer(state, timer = {}) {
    state.editTimer = timer
  },

  updateEditTimer(state, data) {
    state.editTimer = {
      ...state.editTimer,
      ...JSON.parse(JSON.stringify(data))
    }
  },

  ////////////////////////////////////// HISTORY

  addHistory(state, history) {
    state.historyList.unshift(history)
  },

  setHistory(state, history = []) {
    state.historyList = history
  },

  ////////////////////////////////////// NEW TIMER

  setNewTimer(state, timer = newTimer) {
    state.newTimer = timer
  },

  updateNewTimer(state, data) {
    state.newTimer = {
      ...state.newTimer,
      ...JSON.parse(JSON.stringify(data))
    }
  },

  ////////////////////////////////////// TIMER

  addTimer(state, timer) {
    state.timers.push(timer)
  },

  removeTimer(state, timerId) {
    const indexTimer = findIndexById(state.timers, timerId)
    state.timers.splice(indexTimer, 1)
  },

  updateTimer(state, { timerId, data }) {
    const timer = findById(state.timers, timerId)

    state.timers = [
      ...state.timers.filter(element => element.id !== timerId),
      Object.assign(timer, JSON.parse(JSON.stringify(data)))
    ]
  },

  ////////////////////////////////////// PAGE

  setPage(state, page = 'multimer') {
    state.page = page
  },

  //////////////////////////////////////
}

export const actions = {
  ////////////////////////////////////// TIMER

  removeTimer ({ dispatch }, timerId) {
    dispatch('pauseTimer', timerId)
    commit('removeTimer', timerId)
  },

  restartTimer ({ getters, commit }, timerId) {
    const timer = getters.timer(timerId)

    clearInterval(timer.interval)

    const payload = {
      timerId: timer.id,
      data: {
        interval: null,
        active: false,
        time: Object.assign({}, timer.defaultTime)
      }
    }

    commit('updateTimer', payload)
  },

  pauseTimer ({ getters, commit }, timerId) {
    const timer = getters.timer(timerId)

    clearInterval(timer.interval)

    const payload = {
      timerId: timer.id,
      data: {
        interval: null,
        active: false,
      }
    }

    commit('updateTimer', payload)
  },

  startTimer ({ dispatch, commit, getters }, timerId) {
    const timer = getters.timer(timerId)
    if (finishedTheTimer(timer.time)) {
      dispatch('restartTimer', timerId)
    } else {
      vibrate(PATTERN_VIBRATE_START_TIMER)
      const interval = setInterval(() => dispatch('reduceTime', timerId), 1000)
      const payload = {
        timerId,
        data: {
          interval,
          active: true
        }
      }
      commit('updateTimer', payload)
    }
  },

  reduceTime ({ getters, commit, dispatch }, timerId) {
    const { time } = getters.timer(timerId)

    let { hours, minutes, seconds } = Object.assign(time)

    if (minutes === 0 && hours > 0 && seconds === 0) {
      hours--
      minutes = 60
    }

    if (seconds === 0 && minutes > 0) {
      minutes--
      seconds = 60
    }

    seconds--

    const payload = {
      timerId,
      data: {
        time: {
          hours,
          minutes,
          seconds
        }
      }
    }

    commit('updateTimer', payload)

    const newTimer = getters.timer(timerId)

    showNotification(newTimer.title, {
      body: `${newTimer.time.hours > 0? leftPad(newTimer.time.hours) + ':' : '' }${leftPad(newTimer.time.minutes)}:${leftPad(newTimer.time.seconds)}`,
      tag: newTimer.id,
      silent: true,
      renotify: true,
    })

    if (finishedTheTimer(newTimer.time)) {
      actionOfTimer('Finish')
      sayMessage(newTimer.title)
      enableNotifications()
      showNotification(newTimer.title, {
        body: 'Timer finished!',
        tag: newTimer.id,
        silent: false,
        renotify: true,
        vibrate: PATTERN_VIBRATE_FINISH_TIMER
      })

      commit('addHistory', {
        id: Date.now() - newTimer.id,
        message: `Finished ${newTimer.title}!`,
        theme: newTimer.theme,
        created: new Date(),
      })
      dispatch('restartTimer', newTimer.id)
    }
  }

  //////////////////////////////////////
}
