import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {
  },
  mutations: {
    storageDarkMode(state) {
      state.darkMode = !state.darkMode
    },
    storageToStateValue(state,value) {
      state.darkMode = value;
    },

  },
  actions: {
  },
  modules: {
  }
})
