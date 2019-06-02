import $axios from './index'

export function login(data) {
  const url = '/apis/login'
  return $axios.post(url, data)
}
