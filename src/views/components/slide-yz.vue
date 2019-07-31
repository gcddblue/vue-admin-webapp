<template>
  <div class="slideYz">
    <el-card>
      <div slot="header">
        <span>滑动验证</span>
      </div>
      <p class="pTitle">
        <i class="el-icon-s-opportunity"></i>
        点击按钮调出滑动验证模块，相关配置如下：
      </p>
      <el-button type="primary" @click="showSlide = true">验证</el-button>
      <p class="pTitle fontBold" style="margin-top: 50px;">参数说明：</p>
      <el-table :data="dataTab1" border stripe style="width: 100%">
        <el-table-column prop="params" label="参数"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="default" label="默认值"></el-table-column>
        <el-table-column prop="info" label="说明"></el-table-column>
      </el-table>
      <p class="pTitle fontBold" style="margin-top: 20px;">回调函数：</p>
      <el-table :data="dataTab2" border stripe style="width: 100%">
        <el-table-column prop="funcName" label="事件名"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="info" label="说明"></el-table-column>
      </el-table>
      <div class="slideSty" v-show="showSlide">
        <slide-verify
          @success="onSuccess"
          @fail="onFail"
          :sliderText="text"
          :w="350"
          :h="175"
          ref="slideDiv"
        ></slide-verify>
        <div class="iconBtn">
          <i class="el-icon-circle-close" @click="showSlide = false"></i
          ><i class="el-icon-refresh" @click="refresh"></i>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import SlideVerify from '@/components/SlideVerify'
export default {
  data() {
    return {
      showSlide: false,
      text: '向右滑动',
      dataTab1: [
        {
          params: 'l',
          type: 'Number',
          default: 42,
          info: '滑块的边长'
        },
        {
          params: 'r',
          type: 'Number',
          default: 10,
          info: '滑块突出圆的半径'
        },
        {
          params: 'w',
          type: 'Number',
          default: 310,
          info: 'canvas画布的宽'
        },
        {
          params: 'h',
          type: 'Number',
          default: 155,
          info: 'canvas画布的高'
        },
        {
          params: 'slideText',
          type: 'String',
          default: 'Slide filled right',
          info: '滑块文字'
        }
      ],
      dataTab2: [
        {
          funcName: 'success',
          type: 'Function',
          info: '验证码匹配成功的回调'
        },
        {
          funcName: 'fail',
          type: 'Function',
          info: '验证码未匹配的回调'
        },
        {
          funcName: 'refresh',
          type: 'Function',
          info: '刷新验证图片的回调'
        }
      ]
    }
  },
  components: {
    SlideVerify
  },
  methods: {
    onSuccess() {
      this.showSlide = false
      this.$message.success('验证成功')
      this.refresh()
    },
    onFail() {
      this.$message.error('验证失败')
    },
    refresh() {
      this.$refs.slideDiv.reset()
    }
  }
}
</script>
<style lang="scss" scoped>
.slideSty {
  position: absolute;
  width: 380px;
  height: 311px;
  background: #e8e8e8;
  border: 1px solid #dcdcdc;
  left: 50%;
  top: 200px;
  margin-left: -188px;
  z-index: 99;
  border-radius: 5px;
}
.iconBtn {
  padding: 9px 0 0 19px;
  color: #5f5f5f;
  border-top: 1px solid #d8d8d8;
  margin-top: 17px;
  i {
    font-size: 22px;
    cursor: pointer;
  }
  i:last-child {
    margin-left: 7px;
  }
}
</style>
<style>
.slideSty .slide-verify {
  margin: 13px auto 0 auto;
  width: 350px !important;
}
.slideSty .slide-verify-slider {
  width: 100% !important;
}
.slideSty .slide-verify-refresh-icon {
  display: none;
}
</style>
