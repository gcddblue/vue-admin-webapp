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
        <sidebar-item></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SideBarItem'
export default {
  data() {
    return {}
  },
  components: { SidebarItem }
}
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
