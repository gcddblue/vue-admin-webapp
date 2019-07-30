<template>
  <div class="excelIn">
    <el-card>
      <div slot="header">
        <span>导入表格</span>
      </div>
      <upload-excel :on-success="generateData"></upload-excel>
      <el-table
        :data="tabList"
        border
        stripe
        style="width: 100%;margin-top: 30px;"
      >
        <el-table-column
          v-for="item in tabHeader"
          :prop="item"
          :key="item"
          :label="item"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import UploadExcel from '@/components/UploadExcel'
export default {
  data() {
    return {
      tabList: [],
      tabHeader: []
    }
  },
  methods: {
    generateData({ header, results }) {
      this.tabHeader = header
      this.tabList = results
    }
  },
  components: {
    UploadExcel
  }
}
</script>
<style></style>
