<template>
  <div class="dashbord">
    <el-row class="infoCrads">
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0"
              :startVal="startVal"
              :endVal="endVal1"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user-solid"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0"
              :startVal="startVal"
              :endVal="endVal1"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Order Placeed</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user-solid"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0"
              :startVal="startVal"
              :endVal="endVal1"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user-solid"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to
              class="cardItem_p0"
              :startVal="startVal"
              :endVal="endVal1"
              :duration="2000"
            ></count-to>
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user-solid"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  data() {
    return {
      startVal: 0,
      endVal1: 27800
    }
  },
  components: {
    CountTo
  }
}
</script>
<style scoped lang="scss">
.dashbord {
  padding: 36px 10px;
}
.infoCrads {
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
  .cardItem_txt {
    float: left;
    margin: 26px 0 0 15px;
    .cardItem_p0 {
      font-size: 20px;
      color: #009688;
    }
    .cardItem_p1 {
      font-size: 16px;
    }
  }
  .cardItem_icon {
    float: right;
    margin: 24px 14px 0 0;
    i {
      font-size: 55px;
      color: #009688;
    }
  }
}
</style>
