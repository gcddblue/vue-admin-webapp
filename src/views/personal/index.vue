<template>
  <div class="personal noPadding">
    <div class="personal_h">
      <div class="perh_d1">
        <div class="perh_info">
          <p class="perh_p0">{{ userName }}</p>
          <div class="chatBox">
            <a href="javascript:;"><i class="iconfont el-icon-weixin"></i></a>
            <a href="javascript:;"><i class="iconfont el-icon-twitter"></i></a>
            <a href="javascript:;"><i class="iconfont el-icon-weibo"></i></a>
          </div>
          <p>{{ introduce }}</p>
        </div>
        <img src="../../assets/personal/user01.jpg" />
        <div class="rightIcon">
          <span style="margin-right: 20px;"
            ><i class="el-icon-star-on"></i>Collection</span
          >
          <span><i class="el-icon-chat-dot-round"></i>Message</span>
        </div>
      </div>
    </div>
    <el-tabs>
      <el-tab-pane label="Timeline">
        <!-- <el-button type="primary" slot="label">Timeline</el-button> -->
        <el-timeline>
          <el-timeline-item timestamp="2019/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4/1" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>提交于 2019/4/1 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>
      <el-tab-pane label="Message">
        <!-- <el-button type="success" slot="label">Message</el-button> -->
        Message
      </el-tab-pane>
    </el-tabs>
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
      padding: 59px 0 0 172px;
      .perh_p0 {
        font-size: 20px;
        margin-bottom: 6px;
      }
    }
    .chatBox {
      .iconfont {
        vertical-align: middle;
      }
      a {
        width: 30px;
        height: 30px;
        display: inline-block;
        background-color: #edf1f2;
        color: #58666e !important;
        border: 1px solid #e4e4e4;
        box-shadow: 0 1px 1px rgba(90, 90, 90, 0.1);
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        margin-bottom: 12px;
        &:hover {
          background-color: #e4e4e4;
        }
      }
    }
    .rightIcon {
      position: absolute;
      top: 94px;
      right: 50px;
      color: #333;
      span {
        font-size: 20px;
        i {
          font-size: 18px;
          margin-right: 5px;
          color: #333;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.personal {
  .el-tabs__header {
    padding: 15px 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .el-tabs__nav-wrap {
    padding-left: 20px;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs__content {
    padding: 0 20px;
  }
}
</style>
