import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocalStorage = new VuexPersistence({ storage: window.localStorage })

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [vuexLocalStorage.plugin],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    }
  },
  modules: {}
})
