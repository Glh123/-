<template>
  <div class="demo6">
    <Header title="订单" />
    <div class="container">
      <el-tabs v-model="type" @tab-click="handleClick" >
        <el-tab-pane label="待付款" name="type1" />
        <el-tab-pane label="代发货" name="type2" />
        <el-tab-pane label="待收货" name="type3" />
        <el-tab-pane label="待评价" name="type4" />
        <el-tab-pane label="已完成" name="type5" />
      </el-tabs>
      <div class="content">
        <el-card class="box-card" v-for="(item ,index) in list" :key="index">
          <div slot="header" class="clearfix">
            <span>{{item.time}}</span>
            <el-tag style="float: right" type="info">{{item.type}}</el-tag>
          </div>
          <div class="card-content">
            <el-avatar style="width； 100px" shape="square" :size="100" fit="fill" :src="item.imgUrl"></el-avatar>
            <div class="decription">
              <div class="title">{{item.name}}</div>
              <div class="medium">
                <div class="desc">{{item.description}}</div>
              </div>
              <div class="bottom">
                <span class="price">￥ {{item.price}}</span>
                <span class="num">x {{item.num}}</span>
              </div>
            </div>
          </div>
          <div class="card-bottom" v-if="item.operate.length">
             <el-button size="mini" class="operate" v-for="(k,m) in item.operate" :key="m">{{k}}</el-button>
          </div>
        </el-card>
        <el-empty v-if="!list.length" description="暂无数据"></el-empty>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/header'
import {getOrderList} from '@/api/orderList'
export default {
  components:{
    Header
  },
  data() {
    return {
      type: 'type1',
      list:[],
    }
  },
  created() {

  },
  mounted() {
    this.getOrderList({type: this.type})
  },
  methods: {
    getOrderList () {
      this.list = [...getOrderList({type: this.type})]
    },
    handleClick () {
      this.getOrderList()
    }
  },
}
</script>
<style scoped>
.demo6 /deep/ .el-tabs__nav{
  float: none;
  display: flex;
}
.demo6 /deep/ .el-tabs__item{
  width: 20%;
  padding: 0;
  text-align:center;
}
.content {
  margin-top: 10px;
  min-height: 700px;
}

.container /deep/ .el-tabs{
  z-index: 2;
  background-color: white;
}

.container /deep/ .el-tabs__nav {
  width: 100%;
}
.container /deep/ .el-tabs__header  {
  margin-bottom: 0;
}
.card-content {
  display: flex;
}
.decription {
  margin-left: 15px;
  flex: 1;
}
.medium {
  margin-top: 3px;
  height: 60px;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.box-card {
  margin-bottom: 10px;
}
.desc {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.card-bottom {
  height: 30px;
  margin-top: 8px;
}
.operate {
  float: right;
  margin-left: 10px;
}
</style>