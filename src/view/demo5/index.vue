<template>
  <div class="demo-5">
    <Header title="商品列表" :icon="headerIcon" />
    <div class="container">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in navs" :label="item.label" :name="item.key" :key="index">
        </el-tab-pane>
      </el-tabs>
      <div class="content" v-if="products.length">
        <div class="product-item" v-for="(item,index) in products" :key="index">
          <img :src="item.url" alt="">
          <span>{{item.name}}</span>
          <span>￥ {{item.price}}</span>
        </div>
      </div>
      <div class="bottom" v-if="visible" @click="addProducts">
        点击加载更多
      </div>
    </div>
  </div>
</template>

<script>
import {getProducts} from '../../api/productList'
import Header from '../../components/header.vue'
export default {
  components:{
    Header
  },
  data() {
    return {
      headerIcon: {
        icon1: 'el-icon-arrow-left', icon2: 'el-icon-search'
      },
      activeName: 'all',
      navs: [
        {label: '综合', key: 'all'},
        {label: '价格', key: 'price'},
        {label: '新品', key: 'new'}
      ],
      products: [],
      pageNum: 1,
      pageSize: 6,
      visible: false
    }
  },
  created() {
    document.title = '任务五'

  },
  mounted() {
    this.getProducts()
  },
  methods: {
    addProducts () {
      this.pageNum = this.pageNum + 1
      this.getProducts()
    },
    handleClick() {
      // 获取数据
      this.pageNum = 1
      this.products = []
      this.getProducts()
    },
    getProducts () {
      const pageNum = this.pageNum
      const pageSize = this.pageSize
      const key = this.activeName
      const list = this.products
      const data = getProducts({pageNum, pageSize, key})
      this.visible = Math.ceil(data.length / pageSize) == pageNum ? false : true
      data.data.forEach((item) => {
        list.push({...item})
      })
      this.products = [...list]
    }
  },
}
</script>
<style scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
}
.header .el-icon-arrow-left {
  margin-left: 15px;
  color: #409EFF;
}
.header .el-icon-search {
  margin-right: 15px;
  color: #409EFF;
}
.header .title {
  flex: 1;
  text-align: center;
}
.demo-5 /deep/ .el-tabs {
  z-index: 2;
  background-color: white;
}
.demo-5 /deep/ .el-tabs__header  {
  margin-bottom: 0;
}
.demo-5 /deep/ .el-tabs__nav {
  width: 100%;
}
.demo-5 /deep/ .el-tabs__nav .el-tabs__item {
  text-align: center;
  width: 33.3333%;
}
.container {
  padding: 4px 2px;
  background-color: rgb(248, 244, 244);
}
.container .content {
  min-height: 513px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 15px;
  padding-bottom: 0px;
}
.content .product-item {
  background-color: white;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.content .product-item img{
  width: 100%;
}
.container .bottom {
  text-align: center;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 15px;
}
</style>