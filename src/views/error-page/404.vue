<template>
  <div class="page404 noPadding">
    <p class="page404_p0">Oooops! Sorry The Page Not Found :(</p>
    <router-link to="/"><el-button>返回首页</el-button></router-link>
  </div>
</template>

<script>
export default {}
</script>
<style scoped lang="scss">
.page404 {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #b5c794 url(../../assets/404img/img-404.png) no-repeat center
    center !important;
  .page404_p0 {
    font-size: 20px;
    color: #fff;
    text-align: center;
    padding: 80px 0 20px 0;
  }
}
</style>
