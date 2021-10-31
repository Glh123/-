<template>
  <div class="demo2">
    <div class="input">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input">
      </el-input>
    </div>
    <div class="logo">
      <img src="../../assets/logo-1.jpg" alt="">
    </div>
    <div class="containers">
      <div class="item" v-for="item in navs" :key="item.index">
        <img class="image" :src="item.url" alt="">
        <div class="description">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/assets/fruit-1.png'
export default {
  data() {
    return {
      input: '',
      navs: [
        {name: '全部商品', url, index: 0},
        {name: '优惠券', url, index: 1},
        {name: '积分商品', url, index: 2},
        {name: '积分签到', url, index: 3},
      ]
    }
  },
  created() {

  },
  mounted() {
    document.title = '任务二'
  }
}
</script>
<style scoped>
.demo2 {
  box-sizing: border-box;
  padding: 4px;
}
.input {
  box-sizing: border-box;
  padding: 10px;
}
.logo {
  height: 200px;
}
.logo img {
  width: 100%;
  height: 100%;

}
.containers {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}
.containers .item {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #C0C4CC;
  box-sizing: border-box;
  padding: 10px 0;
  margin:0px -1px -1px 0px ;
}
.containers .item .image {
  width: 50px;
  height: 50px;
}
</style>