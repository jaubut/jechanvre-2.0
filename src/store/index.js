import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      lang: 'fr'
    },
    mutations: {
      french (state) {
        state.lang = 'fr'
      },
      english (state) {
        state.lang = 'en-US'
      }
    },
    action: {
      reload (state) {
        location.reload()
      }
    }
  })
}

export default createStore
