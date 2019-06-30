<template>
  <div class="dashbord">
    <p>首页</p>
    <el-button @click="getNum()">随机数</el-button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: ''
    }
  },
  methods: {
    getNum() {
      this.num = this.getRandomNum(2, 4)
    },
    getRandomNum(start, end) {
      return Math.floor(Math.random() * (end - 1) + start)
    }
  }
}
</script>
<style scoped lang="scss"></style>
