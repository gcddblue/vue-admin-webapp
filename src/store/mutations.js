import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN](state, val) {
    state.token = val
  },
  [types.DEL_TOKEN](state) {
    state.token = ''
  }
}

export default mutations
