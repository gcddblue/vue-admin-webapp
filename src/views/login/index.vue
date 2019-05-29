<template>
  <div class="login">
    <el-form ref="loginForm" class="loginCon" :rules="rules" :model="ruleForm">
      <div class="titleDiv">
        <h2>系统登录</h2>
      </div>
      <el-form-item prop="name">
        <el-input
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="ruleForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="ruleForm.pwd"
          show-password
        ></el-input>
      </el-form-item>
      <el-button type="primary" class="loginBtn" @click="_login('loginForm')"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    _login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert('通过')
        } else {
          return
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}
.titleDiv {
  margin-bottom: 30px;
  h2 {
    font-size: 26px;
    color: #eee;
    text-align: center;
  }
}
.loginCon {
  width: 450px;
  margin: 0 auto;
  padding-top: 160px;
}
.loginBtn {
  width: 100%;
}
</style>
