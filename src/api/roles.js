import $axios from './index'
export function getAllRolse() {
  const url = '/apis/getRoles'
  return $axios.get(url)
}
