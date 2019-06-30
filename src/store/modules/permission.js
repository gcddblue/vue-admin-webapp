import { asyncRoutes, currencyRoutes } from '@/router'

const state = {
  routes: [],
  addRoutes: []
}
const mutations = {
  SET_ROUTES(state, payload) {
    state.routes = [...currencyRoutes, ...payload]
    state.addRoutes = payload
  }
}
// 遍历用户权限判断路由是否包含
function hasMetaRoles(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
// 遍历asyncRoutes动态路由
function forSearchArr(arr, roles) {
  let arrNew = []
  for (let item of arr) {
    if (hasMetaRoles(item, roles)) {
      if (item.children) {
        item.children = forSearchArr(item.children, roles)
      }
      arrNew.push(item)
    }
  }
  return arrNew
}
const actions = {
  getAsyncRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let routes = []
      // let sideList = []
      if (roles.includes('admin')) {
        routes = asyncRoutes || ''
      } else {
        routes = forSearchArr(asyncRoutes, roles)
      }
      commit('SET_ROUTES', routes)
      resolve(asyncRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
