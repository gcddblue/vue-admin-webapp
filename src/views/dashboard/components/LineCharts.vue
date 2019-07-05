<template>
  <div
    class="lineCharts"
    :style="{ width: width, height: height }"
    ref="myCharts"
  ></div>
</template>

<script>
import echarts from 'echarts'
export default {
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
      this.mycharts = echarts.init(this.$refs.myCharts)
      this._setOtion()
    },
    _setOtion() {
      this.mycharts.setOption({
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
            areaStyle: {},
            data: [9000, 12000, 30000, 24000, 12000, 40000]
          },
          {
            name: '支出',
            type: 'line',
            areaStyle: {},
            data: [4000, 6000, 30000, 8000, 2000, 10000]
          }
        ]
      })
    }
  }
}
</script>
<style></style>
