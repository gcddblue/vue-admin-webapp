<template>
  <div
    class="lineCharts"
    :style="{ width: width, height: height }"
    ref="myCharts"
  ></div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons')
import { getLineData } from '@/api/dashboard'
export default {
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data() {
    return {
      mycharts: null
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      this._setOtion()
    },
    _setOtion() {
      getLineData().then(res => {
        this.mycharts.setOption({
          title: {
            text: 'Statistics',
            left: '16'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                background: '#6a7985'
              }
            }
          },
          legend: {
            data: ['收入', '支出']
          },
          grid: {
            left: '20',
            right: '20',
            bottom: '3',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['1月', '2月', '3月', '4月', '5月', '6月']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '收入',
              type: 'line',
              areaStyle: {
                color: '#cadefb',
                opacity: 0.9
              },
              itemStyle: {
                color: '#a5c7f7'
              },
              lineStyle: {
                color: '#a5c7f7'
              },
              smooth: true,
              data: res.data.inPrice
            },
            {
              name: '支出',
              type: 'line',
              areaStyle: {
                color: '#55a8fd',
                opacity: 0.6
              },
              itemStyle: {
                color: '#55a8fd'
              },
              lineStyle: {
                color: '#55a8fd'
              },
              smooth: true,
              data: res.data.outPrice
            }
          ]
        })
      })
    }
  }
}
</script>
<style></style>
