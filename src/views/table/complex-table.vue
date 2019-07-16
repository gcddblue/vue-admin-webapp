<template>
  <div class="className">
    <el-card class="anoCard">
      <div slot="header">
        <span>复杂操作表格</span>
      </div>
      <el-table :data="tableData" border stripe>
        <el-table-column prop="id" label="序号" width="80"></el-table-column>
        <el-table-column prop="order" label="订单号"></el-table-column>
        <el-table-column prop="time" label="下单时间"></el-table-column>
        <el-table-column
          prop="address"
          label="配送地址"
          width="280"
        ></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="name" label="配送员"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | tagClass">{{
              scope.row.status | statusText
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editTable(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="warning"
              @click="toConfirm(scope.row)"
              :disabled="scope.row.status === 1 ? false : true"
              >审核</el-button
            >
            <el-button
              type="success"
              @click="toSuccess(scope.row)"
              :disabled="scope.row.status === 2 ? false : true"
              >完成</el-button
            >
            <el-button
              type="danger"
              @click="toDelete(scope.row)"
              :disabled="scope.row.status !== 3 ? false : true"
              >取消</el-button
            >
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
    <el-dialog title="订单修改" :visible.sync="diaIsShow" class="diaForm">
      <el-form
        ref="diaForm"
        :model="formData"
        :rules="rules"
        label-width="140px"
      >
        <el-form-item label="订单号">
          <el-input
            type="text"
            v-model="formData.order"
            disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="订单时间" prop="time">
          <el-date-picker
            v-model="formData.time"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="配送地址" prop="address">
          <el-input
            type="text"
            placeholder="请输入地址"
            v-model="formData.address"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input
            type="text"
            placeholder="请输入电话"
            v-model="formData.phone"
          ></el-input>
        </el-form-item>
        <el-form-item label="配送员" prop="name">
          <el-input
            type="text"
            placeholder="请输入姓名"
            v-model="formData.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formData.status" placeholde="请选择状态">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeTab('diaForm')"
            >确认</el-button
          >
          <el-button @click="diaIsShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getPageTab2 } from '@/api/table'
export default {
  data() {
    return {
      tableData: [],
      allList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pageSizes: [10, 20, 30, 40],
      diaIsShow: false,
      formData: {},
      options: [
        { label: '待审核', value: 1 },
        { label: '配送中', value: 2 },
        { label: '已完成', value: 0 },
        { label: '已取消', value: 3 }
      ],
      rowIndex: 0,
      rules: {
        // order: [{ required: true, message: '请输入订单号', trigger: 'blur' }],
        time: [
          {
            // type: 'datetime',
            required: true,
            message: '请输入时间',
            trigger: 'change'
          }
        ],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系方式', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        status: [
          { required: true, message: '请选择订单状态', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this._getPageTab2()
  },
  filters: {
    statusText(val) {
      if (val === undefined) return
      if (val === 0) {
        return '已完成'
      } else if (val === 1) {
        return '待审核'
      } else if (val === 2) {
        return '配送中'
      } else {
        return '已取消'
      }
    },
    tagClass(val) {
      if (val === undefined) return
      if (val === 0) {
        return 'success'
      } else if (val === 1) {
        return 'info'
      } else if (val === 2) {
        return 'warning'
      } else {
        return 'danger'
      }
    }
  },
  methods: {
    handleSize(val) {
      this.pageSize = val
      this.getPageData()
    },
    handlePage(val) {
      this.currentPage = val
      this.getPageData()
    },
    _getPageTab2() {
      getPageTab2()
        .then(res => {
          this.allList = res.data.tableList
          this.getPageData()
          this.total = res.data.total
        })
        .catch(error => {
          this.$message.error(error.message)
        })
    },
    getPageData() {
      let start = (this.currentPage - 1) * this.pageSize
      let end = start + this.pageSize
      this.tableData = this.allList.slice(start, end)
    },
    toConfirm(row) {
      row.status = 2
      this.$notify({
        title: '成功',
        message: '审核提交成功',
        type: 'success'
      })
    },
    toSuccess(row) {
      row.status = 0
      this.$notify({
        title: '成功',
        message: '该订单已完成配送',
        type: 'success'
      })
    },
    toDelete(row) {
      row.status = 3
      this.$notify({
        title: '成功',
        message: '已取消该订单',
        type: 'success'
      })
    },
    editTable(index, row) {
      this.formData = { ...row }
      this.diaIsShow = true
      this.rowIndex = index
    },
    changeTab(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert('pk')
        } else {
          return
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fyDiv {
  float: right;
  margin-top: 30px;
  padding-bottom: 20px;
}
.anoCard .el-button {
  padding: 8px 18px;
  font-size: 12px;
}
.diaForm {
  .el-input {
    width: 350px;
  }
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
.diaForm .el-form-item__label {
  padding-right: 20px;
}
</style>
