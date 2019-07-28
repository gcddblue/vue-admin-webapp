<template>
  <div class="pushImg">
    <el-card>
      <div slot="header">
        <span>图像上传</span>
      </div>
      <p class="pTitle">
        <i class="el-icon-s-opportunity"></i>
        点击上传用户图像
      </p>
      <el-upload
        class="uploadPic"
        action="https://httpbin.org/post"
        :show-file-list="false"
        :on-success="uploadSuc"
        :before-upload="beforeFun"
        accept="image/jpg,image/jpeg,image/png,image/PNG"
      >
        <img v-if="imgUrl" :src="imgUrl" class="imgUpload" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
export default {
  data() {
    return {
      imgUrl: '',
      loading: null
    }
  },
  methods: {
    uploadSuc(res, file) {
      this.loading.close()
      this.imgUrl = URL.createObjectURL(file.raw)
      this.$message.success('恭喜您，上传成功')
    },
    beforeFun(file) {
      this.loading = Loading.service({ text: '拼命加载中' })
      let fileSize = file.size / 1024 / 1024
      if (fileSize > 2) {
        this.$message.error('上传照片大小不能超过 2MB')
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style lang="scss">
.uploadPic .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.uploadPic .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.imgUpload {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
