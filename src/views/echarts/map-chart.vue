<template>
  <div class="slideCharts">
    <div class="chartBox">
      <div ref="myCharts" class="chartBox_d"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
import 'echarts/map/js/china.js' // 引入中国地图数据
require('echarts/theme/macarons')
export default {
  mixins: [resize],
  data() {
    return {
      mycharts: null,
      mapData: [
        {
          fromName: '北京',
          toName: '江苏',
          value: 19,
          coords: [[116.4551, 40.2539], [119.68, 33.199]]
        },
        {
          fromName: '北京',
          toName: '安徽',
          value: 17,
          coords: [[116.4551, 40.2539], [117.229, 31.917]]
        },
        {
          fromName: '北京',
          toName: '上海',
          value: 25,
          coords: [[116.4551, 40.2539], [121.465, 31.289]]
        },
        {
          fromName: '北京',
          toName: '湖北',
          value: 31,
          coords: [[116.4551, 40.2539], [114.39, 30.663]]
        },
        {
          fromName: '北京',
          toName: '福建',
          value: 12,
          coords: [[116.4551, 40.2539], [119.454, 25.922]]
        },
        {
          fromName: '北京',
          toName: '浙江',
          value: 19,
          coords: [[116.4551, 40.2539], [119.531, 29.877]]
        },
        {
          fromName: '北京',
          toName: '陕西',
          value: 18,
          coords: [[116.4551, 40.2539], [109.116, 34.2]]
        },
        {
          fromName: '北京',
          toName: '河南',
          value: 15,
          coords: [[116.4551, 40.2539], [113.467, 34.623]]
        },
        {
          fromName: '北京',
          toName: '长春',
          value: 15,
          coords: [[116.4551, 40.2539], [125.8154, 44.2584]]
        },
        {
          fromName: '北京',
          toName: '拉萨',
          value: 15,
          coords: [[116.4551, 40.2539], [91.1865, 30.1465]]
        },
        {
          fromName: '北京',
          toName: '重庆',
          value: 15,
          coords: [[116.4551, 40.2539], [107.7539, 30.1904]]
        },
        {
          fromName: '北京',
          toName: '南宁',
          value: 15,
          coords: [[116.4551, 40.2539], [108.479, 23.1152]]
        },
        {
          fromName: '北京',
          toName: '乌鲁木齐',
          value: 15,
          coords: [[116.4551, 40.2539], [87.9236, 43.5883]]
        },
        {
          fromName: '北京',
          toName: '兰州',
          value: 15,
          coords: [[116.4551, 40.2539], [103.5901, 36.3043]]
        }
      ]
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
        backgroundColor: '#404a59',
        title: {
          text: '每日货盘运行图',
          left: 'center',
          top: 30,
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        geo: {
          // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          layoutCenter: ['50%', '50%'],
          layoutSize: '120%',
          label: {
            emphasis: {
              show: true,
              color: '#adadad'
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#404a59'
            },
            emphasis: {
              areaColor: '#2a333d',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'lines',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: '#fff',
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: '#000',
                width: 0,
                curveness: 0.2
              }
            },
            data: this.mapData
          },
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol:
                'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
              symbolSize: 18
            },
            lineStyle: {
              normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: this.mapData
          },
          {
            name: '收货地址',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            tooltip: {
              trigger: 'item'
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                offset: [-5, 5],
                formatter: '{b}'
              },
              emphasis: {
                show: true
              }
            },
            hoverAnimation: true,
            symbol: 'circle',
            symbolSize: 7,
            itemStyle: {
              normal: {
                // show: false,
                color: '#a6c84c'
              }
            },
            data: [
              {
                name: '江苏',
                value: [119.68, 33.199, 19]
              },
              {
                name: '安徽',
                value: [117.229, 31.917, 17]
              },
              {
                name: '上海',
                value: [121.465, 31.28, 25]
              },
              {
                name: '湖北',
                value: [114.39, 30.663, 31]
              },
              {
                name: '福建',
                value: [119.454, 25.922, 22]
              },
              {
                name: '浙江',
                value: [119.531, 29.877, 19]
              },
              {
                name: '陕西',
                value: [109.116, 34.2, 18]
              },
              {
                name: '河南',
                value: [113.467, 34.623, 15]
              },
              {
                name: '长春',
                value: [125.8154, 44.2584]
              },
              {
                name: '拉萨',
                value: [91.1865, 30.1465]
              },
              {
                name: '重庆',
                value: [107.7539, 30.1904]
              },
              {
                name: '南宁',
                value: [108.479, 23.1152]
              },
              {
                name: '乌鲁木齐',
                value: [87.9236, 43.5883]
              },
              {
                name: '兰州',
                value: [103.5901, 36.3043]
              }
            ]
          },
          {
            name: '发送地址',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            tooltip: {
              trigger: 'item'
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                offset: [-5, 5],
                formatter: '{b}'
              },
              emphasis: {
                show: true
              }
            },
            hoverAnimation: true,
            symbol: 'circle',
            symbolSize: 1,
            itemStyle: {
              normal: {
                // show: false,
                color: '#a6c84c'
              }
            },
            data: [
              {
                name: '北京',
                value: [116.4551, 40.2539]
              }
            ]
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
    height: 100%;
    box-sizing: border-box;
    // padding: 30px 20px 30px 20px;
  }
}
</style>
