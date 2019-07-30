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
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 2,
          date: '2018-05-03',
          name: '小明',
          province: '北京',
          city: '朝阳区',
          address: '西坝河小区',
          zip: 200334
        },
        {
          id: 3,
          date: '1980-05-01',
          name: '小敏',
          province: '陕西',
          city: '西安市',
          address: '曲江小区',
          zip: 100334
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '小黑',
          province: '陕西',
          city: '渭南',
          address: '西坝河小区',
          zip: 500334
        },
        {
          id: 5,
          date: '2016-05-03',
          name: '小虎',
          province: '陕西',
          city: '西安市',
          address: '曲江小区',
          zip: 400334
        },
        {
          id: 6,
          date: '2016-05-03',
          name: '小黑',
          province: '陕西',
          city: '西安市',
          address: '曲江小区',
          zip: 200311
        },
        {
          id: 7,
          date: '2016-05-03',
          name: '小黑',
          province: '陕西',
          city: '西安市',
          address: '曲江小区',
          zip: 200311
        },
        {
          id: 8,
          date: '2016-05-03',
          name: '小黑',
          province: '陕西',
          city: '西安市',
          address: '曲江小区',
          zip: 200311
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
        const multiHeader = [
          ['序号', '配送信息', '', '', '', '', '日期'],
          ['', '姓名', '地址', '', '', '', '']
        ]
        const tHeader = ['', '', '省份', '市区', '地址', '邮编', '']
        const filterVal = [
          'id',
          'name',
          'province',
          'city',
          'address',
          'zip',
          'date'
        ]
        const list = this.tabList
        const data = this.formatJson(filterVal, list)
        const merges = ['A1:A3', 'B1:F1', 'G1:G3', 'B2:B3', 'C2:F2']
        moudle.export_json_to_excel({
          multiHeader,
          header: tHeader,
          data,
          merges,
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
