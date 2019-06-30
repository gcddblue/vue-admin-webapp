<template>
  <div class="header">
    <div class="header_l">
      <a href="javascript:;" class="logoLink"
        ><img src="./logo.png" alt="logo" />Logo</a
      >
    </div>
    <div class="header_r">
      <div class="headr_d1"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped lang="scss">
.header {
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}
.header_l {
  width: 200px;
  height: 100%;
  float: left;
  background-color: #3a3f51;
  box-sizing: border-box;
  border-bottom: 1px solid #454b61;
}
.header_r {
  height: 100%;
  margin-left: 200px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}
.logoLink {
  color: #fff;
  font-size: 20px;
  margin: 9px 0 0 23px;
  display: inline-block;
  font-weight: bold;
  font-family: serif;
  img {
    height: 28px;
    vertical-align: sub;
    margin-right: 8px;
  }
}
</style>
