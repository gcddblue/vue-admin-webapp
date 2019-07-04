<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <div class="wrapper_con">
      <side-bar></side-bar>
      <div class="pageMain">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sideBar'
import MHeader from './components/header'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapGetters(['opened'])
  },
  components: {
    SideBar,
    MHeader
  }
}
</script>
