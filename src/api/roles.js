import $axios from './index'
export function getAllRolse() {
  const url = '/getRoles'
  return $axios.get(url)
}
