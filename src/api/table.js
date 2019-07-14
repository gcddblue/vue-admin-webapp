import $axios from './index'

export function getPageTab1(params) {
  const url = '/apis/getPageData1'
  return $axios.get(url, params)
}
