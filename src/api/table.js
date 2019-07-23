import $axios from './index'

export function getPageTab1(params) {
  const url = '/getPageData1'
  return $axios.get(url, params)
}
export function getPageTab2() {
  const url = '/getPageData2'
  return $axios.get(url)
}
