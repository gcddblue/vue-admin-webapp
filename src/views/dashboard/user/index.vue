<template>
  <div class="user">
    <p class="user_p0">Ordinary Users</p>
    <p class="user_p1">users's Dashboard</p>
    <div class="user_img">
      <img src="https://cn.vuejs.org/images/logo.png" alt="vue" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.user {
  overflow: hidden;
  .user_p0 {
    font-size: 36px;
    text-align: center;
    padding-top: 55px;
    animation: bounceInUp 1s;
  }
  .user_p1 {
    font-size: 20px;
    text-align: center;
    animation: bounceInUp 1s;
    animation-delay: 0.1s;
  }
  .user_img {
    text-align: center;
    margin-top: 46px;
    animation: bounceInUp 1s;
    animation-delay: 0.1s;
  }
}
</style>
