<template>
  <div class="demo-10">
    <div class="header">
      <div style="display: flex">
        <el-input v-model="search" placeholder="请输入内容" size="mini" style="width: 300px;margin-right: 30px"></el-input>
        <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
        <el-button type="warning" icon="el-icon-refresh-left" size="mini" @click="clear">重置</el-button>
      </div>
      <div style="margin-top: 20px">
        <el-button type="primary" icon="el-icon-plus" size="mini">新增</el-button>
        <el-button type="success" icon="el-icon-edit" size="mini" plain>修改</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        <el-button type="warning" icon="el-icon-download" size="mini" >导出</el-button>
      </div>
    </div>
    <div class="content">
      <el-table
        :data="tableData"
        style="width: 100%"
        row-key="id"
        lazy
        :load="load"
        @selection-change="handleSelectionChange"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="480">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="380">
          <template slot-scope="scope">
            <el-tag>{{scope.row.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="num"
          sortable
          label="数量"
          width="380">
        </el-table-column>
         <el-table-column
          prop="num"
          sortable
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="handleEdit(scope)"/>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleDelete(scope)"/>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      multipleSelection: [],
      tableData:  [{
          id: 1,
          status: '显示',
          name: '手机',
          hasChildren: true,
          num: 15500,
        }, {
          id: 2,
          status: '显示',
          name: '水果',
          num: 200,
        }, {
          id: 3,
          status: '显示',
          name: '化妆品',
          num: 100,
        }]
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 19,
            status: '显示',
            name: '华为',
            num: 15000,
          },
          {
            id: 20,
            status: '显示',
            name: '荣耀',
            num: 500,
          },
        ])
      }, 1000)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    clear () {
      this.search = ''
    },
    handleEdit ({row}) {
      console.log(row)
    },
    handleDelete ({row}) {
      console.log(row)
    }
  },
}
</script>
<style scoped lang='less'>
.demo-10 {
  padding: 20px;
  .content{
    padding-top: 30px;
  }
}
</style>