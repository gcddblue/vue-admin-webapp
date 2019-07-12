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
    let itemNew = { ...item } //解决浅拷贝共享同一内存地址
    if (hasMetaRoles(itemNew, roles)) {
      if (itemNew.children) {
        itemNew.children = forSearchArr(itemNew.children, roles)
      }
      arrNew.push(itemNew)
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
      console.log(asyncRoutes)
      commit('SET_ROUTES', routes)
      resolve(routes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
