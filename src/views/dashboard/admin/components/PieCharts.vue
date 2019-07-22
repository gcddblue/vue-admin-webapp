<template>
  <div ref="myCharts" :style="{ width: width, height: height }"></div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons') // echarts theme
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
      this.mycharts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Vue', 'js', 'html', 'css', 'webpack', 'node']
        },
        series: [
          {
            name: 'technology stack',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 120],
            center: ['50%', '42%'],
            data: [
              { value: 40, name: 'Vue' },
              { value: 35, name: 'js' },
              { value: 20, name: 'html' },
              { value: 10, name: 'css' },
              { value: 8, name: 'webpack' },
              { value: 5, name: 'node' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
<style></style>
