<template>
  <div class="excelOut">
    <el-card>
      <div slot="header">
        <span>导出表格</span>
      </div>
      <el-input
        type="text"
        v-model="filename"
        placeholder="输入导出的文件名称"
        clearable
        class="wid300 mtrt20"
      ></el-input>
      <el-button type="primary" @click="excelDow" class="btnStyle1"
        >导出</el-button
      >
      <el-table
        :data="tabList"
        border
        stripe
        style="width: 100%;margin-top: 30px;"
      >
        <el-table-column prop="id" label="序号" width="80"> </el-table-column>
        <el-table-column prop="date" label="出生日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="position" label="职业"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          id: 1,
          date: '1992-05-02',
          name: '王小虎',
          sex: '男',
          position: '医生',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '1999-05-04',
          name: '小明',
          sex: '男',
          position: '老师',
          address: '北京市朝阳区'
        },
        {
          id: 3,
          date: '1980-05-01',
          name: '小敏',
          sex: '女',
          position: '护士',
          address: '上海市浦东区 1519 弄'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 5,
          date: '2016-05-03',
          name: '小虎',
          sex: '男',
          position: '运动员',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 6,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 7,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 8,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 9,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          id: 10,
          date: '2016-05-03',
          name: '小黑',
          sex: '男',
          position: '学者',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      autoWidth: true,
      bookType: 'xlsx',
      filename: ''
    }
  },
  methods: {
    excelDow() {
      import('@/vendor/Export2Excel.js').then(moudle => {
        const tHeader = ['序号', '日期', '姓名', '性别', '职业', '地址']
        const filterVal = ['id', 'date', 'name', 'sex', 'position', 'address']
        const list = this.tabList
        const data = this.formatJson(filterVal, list)
        moudle.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename === '' ? 'filename' : this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>
