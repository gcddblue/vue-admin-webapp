<template>
  <div class="rolesControl">
    <el-card>
      <el-button type="primary">添加权限</el-button>
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
            <el-button type="primary" @click="editRoles(scope.row)"
              >编辑</el-button
            >
            <el-button type="warning">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="权限编辑" :visible.sync="diaIsShow" class="diaForm">
      <el-form ref="rolesForm" :model="formData" label-width="140px">
        <el-form-item label="身份">
          <el-input
            type="text"
            placeholder="请输入要添加的身份类别"
            v-model="formData.key"
          ></el-input>
        </el-form-item>
        <el-form-item label="说明">
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
            default-expand-all
            :check-strictly="strictly"
          ></el-tree>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeRoles('diaForm', editType)"
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
      allRoute: [...currencyRoutes, ...asyncRoutes],
      treeData: [],
      defaultProps: {
        label: 'label',
        children: 'children'
      },
      strictly: true
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
    editRoles(row) {
      this.diaIsShow = true
      this.strictly = true
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(row.pages)
        this.strictly = false
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
  margin-right: 12px;
}
</style>
