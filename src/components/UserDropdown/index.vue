<template>
  <div>
    <el-dropdown class="userDd">
      <div class="userDrop">
        <span class="userDrop_text"
          >{{ userName }}<i class="el-icon-caret-bottom"></i
        ></span>
        <img src="./user01.jpg" alt="user" />
      </div>
      <el-dropdown-menu solt="dropdown">
        <el-dropdown-item>
          <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/"
            ><i class="el-icon-s-custom"></i>我的主页</router-link
          >
        </el-dropdown-item>
        <el-dropdown-item divided>
          <router-link to="/"
            ><i class="el-icon-switch-button"></i>登出</router-link
          >
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName'])
  }
}
</script>
