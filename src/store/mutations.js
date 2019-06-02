import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN](state, val) {
    state.token = val
    localStorage.setItem('token', val)
  },
  [types.DEL_TOKEN](state) {
    state.token = ''
    localStorage.removeItem('token')
  }
}

export default mutations
