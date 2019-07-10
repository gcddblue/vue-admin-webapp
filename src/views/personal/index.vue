<template>
  <div class="personal">
    <div class="personal_h">
      <div class="perh_d1">
        <div class="perh_info">
          <p class="perh_p0">{{ userName }}</p>
          <div>
            <i class="iconfont iconweixin"></i>
            <i class="iconfont icontwitter"></i>
            <i class="iconfont iconweibo"></i>
          </div>
          <p>{{ introduce }}</p>
        </div>
        <img src="../../assets/personal/user01.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName', 'introduce'])
  }
}
</script>
<style lang="scss" scoped>
.personal_h {
  width: 100%;
  height: 230px;
  background: url(../../assets/personal/personBg.jpg) no-repeat center center;
  background-size: cover;
  .perh_d1 {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: relative;
    color: #58666e;
    & > img {
      position: absolute;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      top: 60px;
      left: 50px;
    }
    .perh_info {
      padding: 75px 0 0 172px;
      .perh_p0 {
        font-size: 20px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
