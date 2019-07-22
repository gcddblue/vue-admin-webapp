<template>
  <div class="pageAdimin">
    <el-card>
      <p class="driver_p0">
        <i class="el-icon-s-opportunity"></i>本页面只有admin权限下显示
      </p>
      <div class="driver_p0">你的权限页面是:</div>
      <el-tag v-for="item in roles" :key="item">{{ item }}</el-tag>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['roles'])
  }
}
</script>
<style scoped lang="scss">
.pageAdimin .el-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.driver_p0 {
  font-size: 14px;
  margin-bottom: 20px;
  i {
    margin-right: 5px;
    color: #ffc107;
    font-size: 18px;
  }
}
</style>
