<template>
  <div class="className">
    <el-card>
      <div slot="header">
        <span>复杂操作表格</span>
      </div>
      <el-table :data="tableData">
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  }
}
</script>
<style lang="scss" scoped></style>
