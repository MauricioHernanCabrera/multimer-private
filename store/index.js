import {
  findById,
  finishedTheTimer,
} from '~/helpers/time'
import {
  newTimer
} from '~/helpers/const'

export const state = () => ({
  timers: [],

  page: 'multimer',

  editTimer: {},

  newTimer,

  historyList: [],
})

export const getters = {
  timer: ({ timers }) => (id) => {
    return findById(timers, id)
  }
}

export const mutations = {
  setPage (state, page = 'multimer') {
    state.page = page
  },

  setHistory (state, history = []) {
    state.historyList = history
  },

  setNewTimer (state, timer = newTimer) {
    state.newTimer = timer
  },

  setEditTimer (state, timer = {}) {
    state.editTimer = timer
  },

  updateEditTimer (state, data) {
    state.editTimer = {
      ...state.editTimer,
      ...JSON.parse(JSON.stringify(data))
    }
  },

  updateNewTimer (state, data) {
    state.newTimer = {
      ...state.newTimer,
      ...JSON.parse(JSON.stringify(data))
    }
  },

  addHistory (state, history) {
    state.historyList.unshift(history)
  },

  updateTimer (state, { timerId, data }) {
    const timer = findById(state.timers, timerId)

    state.timers = [
      ...state.timers.filter(element => element.id !== timerId),
      Object.assign(timer, JSON.parse(JSON.stringify(data)))
    ]
  },

  addTimer (state, timer) {
    state.timers.push(timer)
  },

  removeTimer (state, timerId) {
    console.log('Entro')
    const indexTimer = findById(state.timers, timerId)
    state.timers.splice(indexTimer, 1)
  },
}

export const actions = {
  activeMessage ({}, title) {
    try {
      const voice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-US')
      const message = new SpeechSynthesisUtterance(`Finished ${title}!`)
      message.voice = voice
      window.speechSynthesis.speak(message)
      window.navigator.vibrate([500, 250, 500, 250, 500])
    } catch (e) {}
  },

  vibrateButton ({}) {
    try {
      window.navigator.vibrate([200])
    } catch (e) {}
  },

  removeTimer ({ dispatch }, timerId) {
    dispatch('stopTimer', timerId)
    commit('removeTimer', timerId)
  },

  editTimer({ commit }, { id, title, time, defaultTime, active, interval, theme }) {
    const payload = {
      timerId: id,
      data: {
        title,
        time,
        defaultTime,
        active,
        interval,
        theme,
      }
    }
    commit('updateTimer', payload)
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

  stopTimer ({ getters, commit }, timerId) {
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
      dispatch('vibrateButton')
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

    if (finishedTheTimer(newTimer.time)) {
      dispatch('activeMessage', newTimer.title)
      commit('addHistory', {
        id: Date.now() - newTimer.id,
        message: `Finished ${newTimer.title}!`,
        theme: newTimer.theme,
        created: new Date(),
      })
      dispatch('restartTimer', newTimer.id)
    }
  }
}
