import $axios from './index'

export function getCardsData() {
  const url = '/apis/getCardsData'
  return $axios.get(url)
}
export function getLineData() {
  const url = '/apis/getLineData'
  return $axios.get(url)
}
