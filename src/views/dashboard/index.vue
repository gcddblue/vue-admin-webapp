<template>
  <div class="dashbord">
    <el-row class="infoCrads">
      <el-col :span="6">
        <div class="cardItem"></div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem"></div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem"></div>
      </el-col>
      <el-col :span="6">
        <div class="cardItem"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: ''
    }
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
</style>
