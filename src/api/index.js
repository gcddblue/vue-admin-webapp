import axios from 'axios'
import Qs from 'qs'

const $axios = axios.create({
  timeout: 30000,
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
$axios.interceptors.response.use(
  response => {
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        // 返回401 清除token信息并跳转到登陆页面
      }
    } else {
      // 请求超时或者网络有问题
    }
    return Promise.reject(error)
  }
)

// get，post请求方法
export default {
  post(url, data) {
    return $axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers: {
        'Conten-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, params) {
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}
