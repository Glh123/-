<template>
  <div class="demo-9">
    <Header title="商品分类" />
    <el-tabs v-model="tabName" tab-position="left" style="height: 91%;margin-top:5px">
      <el-tab-pane label="手机">
        <div class="item" v-for="(item, index) in productList" :key="index" @click="handleClick">
          <el-image style="width: 50px; height: 50px" :src="item.url" fit="cover"></el-image>
          <span>{{item.name}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="水果">
        <div class="item" v-for="(item, index) in productList" :key="index" @click="handleClick">
          <el-image style="width: 50px; height: 50px" :src="item.url" fit="cover"></el-image>
          <span>{{item.name}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="化妆品">
        <div class="item" v-for="(item, index) in productList" :key="index" @click="handleClick">
          <el-image style="width: 50px; height: 50px" :src="item.url" fit="cover"></el-image>
          <span>{{item.name}}</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Header from '@/components/header'
import {getProducts} from '../../api/productList'
const tabs = ['all', 'fruit', 'cosmetics']
export default {
  components: {
    Header
  },
  data() {
    return {
      productList: [],
      tabName: 0
    }
  },
  watch: {
    tabName (newVal) {
      this.getProducts(tabs[newVal])
    }
  },
  methods: {
    getProducts (val='all') {
      const data = getProducts(val)
      this.productList = [...data.data]
    },
    handleClick () {
      this.$router.push('/demo5')
    }
  },
}
</script>
<style lang="less" scoped>
.demo-9{
  min-height: 92%;
}
/deep/.el-tabs__header {
  height: auto !important;
}
/deep/.el-tabs__content {
  .el-tab-pane{
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    .item {
      width: 33.333%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      img{
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>