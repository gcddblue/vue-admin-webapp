<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
    >
      <notificat-bar v-show="msgIsShow"></notificat-bar>
    </transition>
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
import NotificatBar from '@/components/NotificatBar'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  computed: {
    ...mapGetters(['opened', 'msgIsShow'])
  },
  components: {
    SideBar,
    MHeader,
    NotificatBar
  }
}
</script>
