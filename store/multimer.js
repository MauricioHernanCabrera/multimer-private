// import {
//   newTimer
// } from '~/helpers/types'
import {
  findIndexById
} from '~/helpers/time'

const state = {
  // newTimer,
  timers: [],
}

const getters = {}

const mutations = {
  addTimer (state, timer) {
    state.timers.push(timer)
  },

  removeTimer (state, id) {
    const indexTimer = findIndexById(timers, id)
    state.timers.splice(indexTimer, 1)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
