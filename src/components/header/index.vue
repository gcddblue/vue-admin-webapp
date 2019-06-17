<template>
  <div class="header">
    <div class="header_l"></div>
    <div class="header_r"></div>
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
}
.header_r {
  height: 100%;
  margin-left: 200px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
}
</style>
