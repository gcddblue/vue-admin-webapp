<template>
  <div class="iconsDiv">
    <el-card>
      <p class="driver_p0">
        <i class="el-icon-s-opportunity"></i>可以使用的图标
      </p>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"
            ><i class="el-icon-picture-outline-round"></i> Element icons</span
          >
          <p class="pTitle">
            直接通过设置类名为
            <code>el-icon-iconName</code> 来使用即可，例如：<code>{{
              expText1
            }}</code>
          </p>
          <ul class="iconUl clearFixed">
            <li v-for="item in elIcons" :key="item">
              <i :class="item"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"
            ><i class="el-icon-s-promotion"></i> 阿里iconfonts</span
          >
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { elIcons } from './element-icons'
export default {
  data() {
    return {
      elIcons,
      expText1: '<i class="el-icon-platform-eleme"></i>'
    }
  }
}
</script>
<style lang="scss" scoped>
.driver_p0 {
  font-size: 14px;
  margin-bottom: 20px;
  i {
    margin-right: 5px;
    color: #ffc107;
    font-size: 18px;
  }
}
.pTitle {
  font-size: 14px;
  color: #666;
  padding: 10px 0;
  code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
  }
}
.iconUl {
  border: 1px solid #eee;
  border-right: none;
  li {
    float: left;
    width: 10%;
    text-align: center;
    height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    &:hover {
      i {
        color: #5cb6ff;
      }
      span {
        color: #5cb6ff;
      }
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
      transition: color 0.15s linear;
      margin-top: 30px;
    }
    span {
      color: #99a9bf;
    }
  }
}
</style>
