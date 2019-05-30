const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '' // 认证凭证
}

export default state
