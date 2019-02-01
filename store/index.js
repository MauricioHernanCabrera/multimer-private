import {
  findById,
  findIndexById,
  finishedTheTimer,
} from '~/helpers/time'

export const state = () => ({
  timers: [
    {
      id: Date.now(),
      title: 'Pizza',
      time: {
        hours: 0,
        minutes: 0,
        seconds: 10,
      },
      defaultTime: {
        hours: 0,
        minutes: 0,
        seconds: 10,
      },
      active: false,
      interval: null,
      theme: 'kiwi',
    }
  ],
  page: 'multimer',
  editTimer: {}
})

export const getters = {
  timer: ({ timers }) => (id) => {
    return findById(timers, id)
  }
}

export const mutations = {
  setPage (state, page) {
    state.page = page
  },

  updateEditTimer (state, data) {
    state.editTimer = {
      ...state.editTimer,
      ...JSON.parse(JSON.stringify(data))
    }
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
      dispatch('restartTimer', newTimer.id)
    }
  }
}
