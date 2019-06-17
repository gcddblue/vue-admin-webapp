<template>
  <div class="wrapper">
    <m-header></m-header>
    <div class="wrapper_con">
      <slide-bar></slide-bar>
      <div class="rightPanel">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBar from './components/slideBar'
import MHeader from './components/header'
export default {
  name: 'layout',
  components: {
    SlideBar,
    MHeader
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.rightPanel {
  margin-left: 200px;
  padding-top: 50px;
  background-color: #fff;
}
</style>
