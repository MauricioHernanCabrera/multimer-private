import Vuex from 'vuex'
import multimer from '~/store/multimer'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      multimer
    }
  })
}

export default createStore
