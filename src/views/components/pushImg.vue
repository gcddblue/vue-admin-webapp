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
import { Loading } from 'element-ui'
import UploadCom from '@/components/Upload'
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
  },
  components: {
    UploadCom
  }
}
</script>
