<template>
  <div class="detail">
    <i class="el-icon-arrow-left" @click="goBack"></i>
    <el-carousel height="400px" :autoplay="false" :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in 4" :key="item">
        <el-image style="width: 100%; height: 100%" :src="url" fit="cover"></el-image>
        <span class="xiabiao">{{index+1}}/{{4}}</span>
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <div class="content">
        <div class="header">
          <p class="price">￥ 2000.00</p>
          <div class="right">
            <div class="item">
              <span>17</span>
              <span>浏览</span>
            </div>
             <div class="item">
              <span>17</span>
              <span>销量</span>
            </div>
          </div>
        </div>
        <div class="description">
          【11.11开门红】①预订最高省100元 ②整点购机限量赠自拍杆 ③享3期免息 ④以旧换新补贴50元
        </div>
      </div>
      <div class="standard">
        <p>选择规格</p>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="item">
          <i class="iconfont el-icon-shopping-cart-2"></i>
          <span>购物车</span>
        </div>
        <div class="item">
          <i class="iconfont el-icon-star-on"></i>
          <span>收藏</span>
        </div>
      </div>
      <div class="right">
        <div class="shopping item"><i></i>加入购物车</div>
        <div class="purchase item">立即购买<i></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.xiabiao {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  padding: 3px 5px;
  background-color: #909399;
}
.el-icon-arrow-left{
  position: fixed;
  left: 15px;
  top: 20px;
  font-size: 35px;
  z-index: 200;
  color: black;
}
.content {
  border: 1px solid transparent;
  padding: 8px 10px 8px;
  background-color: white;
  .header {
    box-sizing: border-box;
    margin: 15px 0 5px;
    display: flex;
    align-items: center;
    .price{
      flex: 1;
      color: wheat;
      font-size: 30px;
    }
    .right {
      display: flex;
      display: flex;
      font-size: 12px;
      color: #909399;
      .item{
        margin-left: 8px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .description{
    font-size: 14px;
    line-height: 1.6;
  }
}
.standard{
  margin-top: 15px;
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  p{
    flex: 1;
    margin-left: 30px;
  }
  .el-icon-arrow-right{
    margin-right: 25px;
    font-size: 28px;
    color: #909399;
  }
}
.bottom {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  .left{
    flex: 1;
    display: flex;
    font-size: 15px;
    color: #909399;
    margin-left: 10px;
    align-items: center;
    .item{
      display: flex;
      flex-direction: column;
      margin-right: 15px;
      justify-content: center;
      .iconfont{
        font-size: 20px;
      }
    }
  }
  .right{
    display: flex;
    margin-right: 10px;
    font-size: 15px;
    i{
      display: inline-block;
      width: 15px;
    }
    .item {
      height: 25px;
      color: white;
      padding: 10px 20px;
    }
    .shopping{
      background-color:tomato;
      // border-left: 20px;
      border-radius: 35px 0 0 35px;
    }
    .purchase {
      background-color: red;
      border-radius: 0px 35px 35px 0;
    }
  }
}
</style>