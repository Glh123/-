<template>
  <div class="demo-7">
    <Header title="我的钱包" />
    <div class="container">
      <div class="record">
        <div class="item" v-for="(item,index) in records" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.money}}</span>
        </div>
      </div>
      <div class="invest">
        <div class="item">
          <div class="left">
            <i class="el-icon-goods" />
            <span>充值￥1 赠送￥100</span>
          </div>
          <div class="right">
            <el-button type="danger" size="mini" @click="handleDeposit('type1')" round>充值</el-button>
          </div>
        </div>
         <div class="item">
          <div class="left">
            <i class="el-icon-goods" />
            <span>充值￥100 赠送￥1000</span>
          </div>
          <div class="right">
            <el-button type="danger" size="mini"  @click="handleDeposit('type2')" round>充值</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import {getRecords} from '@/api/getRecord'
const records = {
  property: '总资产（元）',
  deposit: '累计充值（元）',
  consume: '累计消费（元）'
}
export default {
  components: {
    Header
  },
  data() {
    return {
      records: [],
    }
  },
  mounted() {
    this.getRecords()
  },
  methods: {
    async getRecords () {
      const data = await getRecords()
      const list = []
      Object.keys(data).forEach((key) => {
        list.push({name: records[key], money: data[key]})
      })
      this.records = [...list]
    },
    handleDeposit (type) {
      this.openFullScreen(type)
    },
    openFullScreen(type) {
      const loading = this.$loading({
        lock: true,
        text: '充值中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      // 向后端发起充值接口 type 区分是哪种充值
      setTimeout(() => {
        loading.close();
        this.$message.success('充值成功')
      }, 2000);
    }
  },
}
</script>
<style scoped>
.demo-7{
  font-size: 13px;
}
.record {
  margin: 3px;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  color: white;
  background-color: black;
  height: 80px;
}
.record .item {
  width: 33.33333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.record .item span{
  margin: 5px 0;
  
}
.invest {
  margin: 3px;
  margin-top: 20px;
  background-color: white;
}
.invest .item {
  height: 40px;
  display: flex;
  align-items: center;
}
.invest .item .left{
 flex: 1;
 margin-left: 10px;
}
.invest .item .right{
 margin-right: 15px;
}
</style>