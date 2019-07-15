<template>
  <div class="className">
    <el-card>
      <div slot="header">
        <span>基础表格</span>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>
    <el-card class="mtop30 anoCard">
      <div slot="header">
        <span>带分页表格</span>
      </div>
      <el-table :data="tablePage" border stripe style="width: 100%;">
        <el-table-column prop="num" label="序号" width="120"></el-table-column>
        <el-table-column prop="id" label="ID#"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="quantity" label="数量"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | tagClass">{{
              scope.row.status | statusText
            }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :current-page="currentPage"
        :total="total"
        class="fyDiv"
        @size-change="handleSize"
        @current-change="handlePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getPageTab1 } from '@/api/table'
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pageSizes: [10, 20, 30, 40],
      tablePage: []
    }
  },
  created() {
    this._getPageTab1(1, 10)
  },
  filters: {
    statusText(val) {
      if (val === undefined) return
      if (val === 0) {
        return '已完成'
      } else if (val === 1) {
        return '进行中'
      } else {
        return '已取消'
      }
    },
    tagClass(val) {
      if (val === undefined) return
      if (val === 0) {
        return 'success'
      } else if (val === 1) {
        return 'warning'
      } else {
        return 'danger'
      }
    }
  },
  methods: {
    handleSize(val) {
      this.pageSize = val
      this._getPageTab1(this.currentPage, val)
    },
    handlePage(val) {
      this.currentPage = val
      this._getPageTab1(val, this.pageSize)
    },
    _getPageTab1(current, size) {
      getPageTab1({ currentPage: current, pageSize: size })
        .then(res => {
          this.total = res.data.total
          this.tablePage = res.data.tableList
        })
        .catch(error => {
          this.$message.error(error.message)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.fyDiv {
  float: right;
  margin-top: 30px;
}
</style>
<style lang="scss">
.anoCard {
  .el-card__body:after {
    content: '';
    clear: both;
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
  }
}
</style>
