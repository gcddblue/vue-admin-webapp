<template>
  <div class="dashbord">
    <!-- cardlist -->
    <el-row class="infoCrads">
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-green1"
              :startVal="startVal"
              :endVal="vistors"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-green1"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-blue"
              :startVal="startVal"
              :endVal="message"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Messages</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-s-comment color-blue"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-red"
              :startVal="startVal"
              :endVal="order"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Order Placeed</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-shopping-cart-2 color-red"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0 color-green2"
              :startVal="startVal"
              :endVal="profit"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Profit</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-wallet color-green2"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- end -->
    <!-- lineEcharts -->
    <line-charts class="lCharts"></line-charts>
    <!-- end -->
    <el-row class="tableChart">
      <el-col :span="16">
        <el-table :data="tableData" border>
          <el-table-column prop="id" label="ID#"></el-table-column>
          <el-table-column prop="name" label="产品名称"></el-table-column>
          <el-table-column prop="dealer" label="经销商"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="quantity" label="数量"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import LineCharts from './components/LineCharts'
import { getCardsData } from '@/api/dashboard'
export default {
  data() {
    return {
      startVal: 0,
      vistors: 0,
      message: 0,
      order: 0,
      profit: 0,
      tableData: [
        {
          id: 1,
          name: 'iphone x',
          dealer: '苏宁易购',
          price: '7200',
          quantity: '100',
          status: '已完成'
        }
      ]
    }
  },
  created() {
    this._getCardsData()
  },
  components: {
    CountTo,
    LineCharts
  },
  methods: {
    _getCardsData() {
      getCardsData().then(res => {
        this.vistors = res.data.vistors
        this.message = res.data.message
        this.order = res.data.order
        this.profit = res.data.profit
      })
    }
  }
}
</script>
<style scoped lang="scss">
$mgTop: 30px;
.color-green1 {
  color: #40c9c6 !important;
}
.color-blue {
  color: #36a3f7 !important;
}
.color-red {
  color: #f4516c !important;
}
.color-green2 {
  color: #34bfa3 !important;
}
.dashbord {
  padding: 36px 30px;
}
.infoCrads {
  margin: 0 -20px 0 -20px;
  .el-col {
    padding: 0 20px;
    .cardItem {
      height: 108px;
      background: #fff;
    }
  }
}
.cardItem {
  color: #666;
  box-shadow: 0 0 10px #e2e2e2;
  .cardItem_txt {
    float: left;
    margin: 26px 0 0 20px;
    .cardItem_p0 {
      font-size: 20px;
      font-weight: bold;
    }
    .cardItem_p1 {
      font-size: 16px;
    }
  }
  .cardItem_icon {
    float: right;
    margin: 24px 20px 0 0;
    i {
      font-size: 55px;
    }
  }
}
.lCharts {
  background: #fff;
  margin-top: $mgTop;
  padding: 30px 0;
}
.tableChart {
  margin-top: $mgTop;
}
</style>
