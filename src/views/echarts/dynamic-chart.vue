<template>
  <div class="slideCharts">
    <div class="chartBox">
      <el-button @click="setChartData(10)">10天</el-button>
      <el-button @click="setChartData(30)">30天</el-button>
      <el-button @click="setChartData(60)">60天</el-button>
      <el-button @click="setChartData(180)">180天</el-button>
      <div ref="myCharts" class="chartBox_d"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons')
export default {
  mixins: [resize],
  data() {
    return {
      mycharts: null,
      date: [],
      price: [],
      chartData: {
        date: [],
        price: []
      }
    }
  },
  mounted() {
    this.mockData()
    this.$nextTick().then(() => {
      this.initEcharts()
    })
  },
  methods: {
    // mock data
    mockData() {
      let base = +new Date('2019/1/1')
      let oneDay = 24 * 3600 * 1000
      let date = []
      let data = []
      let len = Math.ceil((+new Date() - base) / oneDay)
      for (let i = 0; i < len; i++) {
        let item = new Date(base)
        base += oneDay
        date.push(
          item.getFullYear() +
            '/' +
            (item.getMonth() + 1) +
            '/' +
            item.getDate()
        )
        data.push(Math.floor(Math.random() * (1000 - 500 + 1) + 500))
      }
      this.date = date
      this.price = data
      // this.chartData.date = date
      // this.chartData.price = data
    },
    setChartData(num) {
      let len = this.date.length
      this.chartData.date = this.date.slice(len - num)
      this.chartData.price = this.price.slice(len - num)
      this._setOption(this.chartData)
    },
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      this.setChartData(10)
      // this._setOption(this.chartData)
    },
    _setOption(chartData) {
      this.mycharts.setOption({
        title: {
          text: '商品价格变动图',
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
            data: chartData.date
          }
        ],
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, '100%']
          }
        ],
        series: [
          {
            name: '商品价格',
            type: 'line',
            areaStyle: {
              color: '#55a8fd',
              opacity: 0.3
            },
            itemStyle: {
              color: '#55a8fd'
            },
            lineStyle: {
              color: '#55a8fd'
            },
            smooth: true,
            data: chartData.price,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.slideCharts {
  height: calc(100% - 72px);
}
.chartBox {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  height: 100%;
  .chartBox_d {
    height: 80%;
    box-sizing: border-box;
    padding: 30px 20px 30px 20px;
  }
}
</style>
