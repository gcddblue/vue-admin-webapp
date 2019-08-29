<template>
  <div class="pushImg">
    <el-card>
      <div slot="header">
        <span>图像上传</span>
      </div>
      <p class="pTitle">
        <i class="el-icon-s-opportunity"></i>
        点击上传用户图像
        <span
          >（支持image/jpg,image/jpeg,image/png,image/gif格式图片
          且大小不能超过2MB）</span
        >
      </p>
      <upload-com></upload-com>
    </el-card>
  </div>
</template>

<script>
import UploadCom from '@/components/Upload'
export default {
  components: {
    UploadCom
  }
}
</script>
