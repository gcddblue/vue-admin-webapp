const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '', // 认证凭证
  roles: [], //用户权限
  sideBars: [] //侧边栏
}

export default state
