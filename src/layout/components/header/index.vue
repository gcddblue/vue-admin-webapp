<template>
  <div class="header">
    <div class="header_l">
      <a href="javascript:;" class="logoLink"
        ><img src="./logo.png" alt="logo" />Logo</a
      >
    </div>
    <div class="header_r">
      <div class="headr_d1">
        <side-collapse class="sidecoll"></side-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import SideCollapse from '@/components/SideCollapse'
export default {
  // watch: {
  //   $route(route) {
  //     console.log(route.matched)
  //   }
  // }
  components: {
    SideCollapse
  }
}
</script>
