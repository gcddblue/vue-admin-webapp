<template>
  <div ref="myCharts" :style="{ width: width, height: height }"></div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons')
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
      this._setOption()
    },
    _setOption() {
      this.mycharts.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            {
              product: 'Matcha Latte',
              '2015': 43.3,
              '2016': 85.8,
              '2017': 93.7
            },
            { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
            {
              product: 'Cheese Cocoa',
              '2015': 86.4,
              '2016': 65.2,
              '2017': 82.5
            },
            {
              product: 'Walnut Brownie',
              '2015': 72.4,
              '2016': 53.9,
              '2017': 39.1
            }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      })
    }
  }
}
</script>
