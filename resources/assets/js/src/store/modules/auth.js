import * as types from '../mutation-types'

const state = {
  isLoggedIn: !!localStorage.getItem('token')
}

const mutations = {
  [types.LOGIN] (state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS] (state) {
    state.isLoggedIn = true
    state.pending = false
  },
  [types.LOGOUT] (state) {
    state.isLoggedIn = false
  }
}

export default {
  state,
  mutations
}
