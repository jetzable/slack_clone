import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: {
    userDisplayName: '',
    userEmail: '',
    userImage: '',
    userToken: ''
  }
}

const mutations = {
  setUserInfo: (state, payload) => {
    state.userInfo = { ...payload }
  }
}

const actions = {
  setUser: ({ commit }, { token, user }) => {
    const userData = {
      userDisplayName: user.displayName,
      userEmail: user.email,
      userImage: user.photoURL,
      userToken: token
    }
    commit('setUserInfo', userData)
  }
}

const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
