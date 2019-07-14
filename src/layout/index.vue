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
      <page-main></page-main>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sideBar'
import MHeader from './components/header'
import NotificatBar from '@/components/NotificatBar'
import PageMain from './components/PageMain'
import { mapGetters } from 'vuex'
import driver from '@/mixins/useDriver'
export default {
  name: 'layout',
  mixins: [driver],
  mounted() {
    if (this.showDriver === 'yes') {
      this.guide()
      this.$store.commit('app/SET_DRIVER', 'no')
    }
  },
  computed: {
    ...mapGetters(['opened', 'msgIsShow', 'showDriver'])
  },
  components: {
    SideBar,
    MHeader,
    NotificatBar,
    PageMain
  }
}
</script>
