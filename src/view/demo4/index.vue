<template>
  <div class="demo-4">
     <el-table
      border
      class="table"
      :data="tableData"
      style="width: 1101px"
      >
      <el-table-column prop="standards" label="规格值" width="450">
        <template slot-scope="scope">
          <span>{{scope.row.standards}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建时间" width="450" />
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="handleClick(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
  </el-table>
  </div>
  <!-- <div class="standards">
            <div class="item" v-for="(item,index) in scope.row.standards" :key="index">
              <span>{{item.value}}：</span><span>{{item.detail.join(',')}}</span>
            </div>
          </div> -->
</template>

<script>
export default {
  data() {
    return {
     tableData: [
       {standards: [{detail: ['200g', '500g', '1000g'], value: '重量'}], date: '2021-07-02 10:46:37'},
       {standards: [{detail: ['黑色', '白色'], value: '颜色'}, {detail: ['5寸', '7寸'], value: '尺寸'}], date: '2020-06-29 10:46:37'},
       {standards: [{detail: ['A4', 'A3'], value: '纸张'}, {detail: ['白色', '红色'], value: '颜色'}], date: '2019-07-02 10:46:37'}
     ]
    }
  },
  created() {

  },
  mounted() {
    document.title = '任务四'
  },
  methods: {
    handleClick (data) {
      console.log(data)
    }
  },
}
</script>
<style scoped>
.table {
  margin: 100px auto;
}
.el-icon-edit, .el-icon-delete {
  font-size: 25px;
  margin-right: 10px;
}
</style>