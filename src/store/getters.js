const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  introduce: state => state.user.introduce,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  sideBarList: state => state.permission.sideBarList
}
export default getters
