<template>
  <div class="slideBar">
    <el-scrollbar>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#3a3f51"
        text-color="#b5b6bd"
        active-text-color="rgb(79, 148, 212)"
        mode="vertical"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-data"></i>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span>文档</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span>组件</span>
          </template>
          <el-menu-item index="3-1">
            组件1
          </el-menu-item>
          <el-menu-item index="3-2">
            组件2
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.slideBar {
  width: 200px;
  height: calc(100% - 50px);
  background-color: #3a3f51;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
  .el-menu {
    height: 100%;
    border: none;
    width: 100%;
  }
}
</style>
