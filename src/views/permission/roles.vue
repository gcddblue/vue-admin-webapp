<template>
  <div class="rolesControl">
    <el-card>
      <el-button type="primary" @click="addRolesTab">添加权限</el-button>
      <el-table
        class="mtop30"
        :data="rolesTab"
        stripe
        border
        style="width: 100%;"
      >
        <el-table-column prop="key" label="身份"></el-table-column>
        <el-table-column prop="description" label="说明"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editRoles(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="warning"
              @click="deleteRoles(scope.$index)"
              :disabled="isAdmin(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="权限编辑" :visible.sync="diaIsShow" class="diaForm">
      <el-form
        ref="rolesForm"
        :model="formData"
        :rules="rules"
        label-width="140px"
      >
        <el-form-item label="身份" prop="key">
          <el-input
            type="text"
            placeholder="请输入要添加的身份类别"
            v-model="formData.key"
          ></el-input>
        </el-form-item>
        <el-form-item label="说明" prop="description">
          <el-input
            type="text"
            placeholder="请输入相关说明"
            v-model="formData.description"
          ></el-input>
        </el-form-item>
        <el-form-item label="菜单">
          <el-tree
            :data="treeData"
            ref="tree"
            node-key="name"
            :props="defaultProps"
            show-checkbox
            :check-strictly="false"
          ></el-tree>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeRoles('rolesForm', editType)"
            >确认</el-button
          >
          <el-button @click="diaIsShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getAllRolse } from '@/api/roles'
import { asyncRoutes, currencyRoutes } from '@/router'
export default {
  data() {
    return {
      rolesTab: [],
      diaIsShow: false,
      formData: {},
      editType: 'update',
      rules: {
        key: [
          {
            required: true,
            message: '请输入要添加的身份类别',
            trigger: 'blur'
          }
        ],
        description: [
          {
            required: true,
            message: '请输入相关说明',
            trigger: 'blur'
          }
        ]
      },
      editIndex: 0,
      allRoute: [...currencyRoutes, ...asyncRoutes],
      treeData: [],
      defaultProps: {
        label: 'label',
        children: 'children'
      }
    }
  },
  created() {
    this._getAllRolse()
    this.treeData = this.getTreeData(this.allRoute)
  },
  methods: {
    _getAllRolse() {
      getAllRolse()
        .then(res => {
          this.rolesTab = res.data.allRoles
        })
        .catch(error => {
          this.$message.error(error)
        })
    },
    isAdmin(row) {
      if (row.key === 'admin' || row.key === 'user') return true
      else return false
    },
    deleteRoles(index) {
      this.$confirm('此操作将永久删除相关数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.rolesTab.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    addRolesTab() {
      this.diaIsShow = true
      this.editType = 'add'
      this.formData = {}
      this.$nextTick(() => {
        this.$refs.rolesForm.clearValidate()
        this.$refs.tree.setCheckedKeys([])
      })
    },
    editRoles(index, row) {
      this.diaIsShow = true
      this.editIndex = index
      this.editType = 'update'
      this.formData = Object.assign({}, this.formData, {
        key: row.key,
        description: row.description
      })
      this.$nextTick(() => {
        this.$refs.rolesForm.clearValidate()
        this.$refs.tree.setCheckedKeys(row.pages)
      })
    },
    changeRoles(form, type) {
      this.$refs[form].validate(valid => {
        if (valid) {
          let treeKeys = this.$refs.tree.getCheckedKeys()
          if (type === 'update') {
            let index = this.editIndex
            this.rolesTab[index].key = this.formData.key
            this.rolesTab[index].description = this.formData.description
            this.rolesTab[index].pages = treeKeys
            this.$notify({
              title: '成功',
              message: '权限修改成功',
              type: 'success'
            })
          } else if (type === 'add') {
            let newTab = {}
            newTab.key = this.formData.key
            newTab.description = this.formData.description
            newTab.pages = treeKeys
            this.rolesTab.push(newTab)
            this.$notify({
              title: '成功',
              message: '权限添加成功',
              type: 'success'
            })
          }
          this.diaIsShow = false
        } else return
      })
    },
    getTreeData(route) {
      let arrBox = []
      for (let item of route) {
        if (item.hidden) continue
        let onlyChild = this.hasOnlyChild(item.children, item)
        if (onlyChild && !onlyChild.children) {
          item = onlyChild
        }
        let data = {
          label: item.meta.title,
          name: item.name
        }
        if (item.children) {
          data.children = this.getTreeData(item.children)
        }
        arrBox.push(data)
      }
      return arrBox
    },
    hasOnlyChild(children = [], item) {
      let newChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      if (newChildren.length === 1 && !item.meta) {
        return newChildren[0]
      } else if (newChildren.length === 0) {
        return item
      }
      return false
    },
    forSearchArr(route, roles) {
      let arrNew = []
      for (let item of route) {
        let itemNew = { ...item } //解决浅拷贝共享同一内存地址
        if (roles.includes(itemNew.name)) {
          if (itemNew.children) {
            itemNew.children = this.forSearchArr(itemNew.children, roles)
          }
          arrNew.push(itemNew)
        }
      }
      return arrNew
    }
  }
}
</script>
<style scoped lang="scss">
.rolesControl .mtop30 .el-button {
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
.diaForm .el-form-item__label {
  padding-right: 12px;
}
</style>
