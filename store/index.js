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

  timers: [],

  workers: [
  ],
})

export const getters = {
  ////////////////////////////////////// TIMER
  timer: ({ timers }) => (id) => {
    return findById(timers, id)
  },

  workers: ({ workers }) => (id) => {
    return findById(workers, id)
  },
}

export const mutations = {
  ////////////////////////////////////// WORKER
  addWorker (state, worker) {
    state.workers.push(worker)
  },

  removeWorker (state, workerId) {
    const workerIndex = findIndexById(state.workers, workerId)
    state.workers.splice(workerIndex, 1)
  },

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

  updateTimer (state, { timerId, data }) {
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

  restartTimer ({ getters, commit, state }, timerId) {
    const timer = getters.timer(timerId)

    const w = getters.workers(timerId)

    if (w) {
      const w = getters.workers(timerId)
      w.worker.postMessage({
        type: 'clearInterval',
        payload: {}
      })
      w.worker.onmessage = null
      w.worker.terminate()

      commit('removeWorker', timerId)
    }

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

  pauseTimer ({ getters, commit, state }, timerId) {
    const timer = getters.timer(timerId)

    const w = getters.workers(timerId)

    w.worker.postMessage({
      type: 'clearInterval',
      payload: {}
    })
    w.worker.onmessage = null
    w.worker.terminate()

    commit('removeWorker', timerId)

    const payload = {
      timerId: timer.id,
      data: {
        interval: null,
        active: false,
      }
    }

    commit('updateTimer', payload)
  },

  startTimer ({ dispatch, commit, getters, state }, timerId) {
    const timer = getters.timer(timerId)
    if (finishedTheTimer(timer.time)) {
      dispatch('restartTimer', timerId)
    } else {
      vibrate(PATTERN_VIBRATE_START_TIMER)

      const worker = this.$worker.createWorker()

      worker.onmessage = (event) => {
        const { data: { type, payload } } = event

        switch (type) {
          case 'getInterval': {
            const { interval } = payload

            commit('updateTimer', {
              timerId,
              data: {
                interval,
                active: true
              }
            })
            break
          }

          case 'newValueTimer': {
            dispatch('reduceTime', JSON.parse(JSON.stringify(payload)))
          }

          default: {
            break
          }
        }
      }

      worker.postMessage({
        type: 'startTimer',
        payload: {
          timer,
        }
      })

      commit('addWorker', {
        id: timer.id,
        worker,
      })
    }
  },



  reduceTime ({ getters, commit, dispatch }, payload) {
    commit('updateTimer', payload)

    const newTimer = getters.timer(payload.timerId)

    // showNotification(newTimer.title, {
    //   body: `${newTimer.time.hours > 0? leftPad(newTimer.time.hours) + ':' : '' }${leftPad(newTimer.time.minutes)}:${leftPad(newTimer.time.seconds)}`,
    //   tag: newTimer.id,
    //   silent: true,
    //   renotify: true,
    // })

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
