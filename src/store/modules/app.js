/*
set sidebar open or close,and some app setting
 */
const state = {
  opened: sessionStorage.getItem('open')
    ? sessionStorage.getItem('open')
    : 'false'
}
const mutations = {
  SET_OPENED(state, payload) {
    state.opened = String(payload)
    sessionStorage.setItem('open', payload)
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
