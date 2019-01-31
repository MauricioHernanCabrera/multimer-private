import {
  findIndexById
} from '~/helpers/time'

export const state = () => ({
  timers: [],
})

export const mutations = {
  addTimer (state, timer) {
    state.timers.push(timer)
  },

  removeTimer (state, id) {
    const indexTimer = findIndexById(timers, id)
    state.timers.splice(indexTimer, 1)
  },
}

export const getters = {}

export const actions = {}
