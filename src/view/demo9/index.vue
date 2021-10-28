<template>
  <div>
    <Header title="商品分类" />
    <el-tabs tab-position="left" style="height: 200px;margin-top:5px">
      <el-tab-pane label="手机">手机</el-tab-pane>
      <el-tab-pane label="水果">水果</el-tab-pane>
      <el-tab-pane label="化妆品">化妆品</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style scoped>

</style>