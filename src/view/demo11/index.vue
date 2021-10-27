<template>
  <div class="demo-11">
    <Header title="我的收藏" />
    <div class="container" v-if="paroductList.length">
      <div class="manage">
        <span @click="handleManage">{{!isManage ? '管理' : '取消'}}</span>
      </div>
      <div class="content">
        <div class="item" v-for="(item, index) in paroductList" :key="index" >
          <el-checkbox v-if="isManage" class="select" :value="item.checked" @change="(val) => handleSelect(val, item)" />
          <el-image class="image" :src="item.url" fit="cover" @click.stop="handelGoDetail(item)"></el-image>
          <p class="name">{{item.name}}</p>
          <p class="price">￥ {{item.price}}</p>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="isManage">
      <div class="select">
        <el-checkbox :value='selectedAll' label="全选" size="medium" @change="handleSelectAll"></el-checkbox>
      </div>
      <el-button class="delete" @click="handleDelete" type="danger" size="mini" round>删除</el-button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import {getProducts} from '../../api/productList'
export default {
  components: {
    Header
  },
  data() {
    return {
      isManage: false,
      paroductList: [],
      selectedAll: false
    }
  },
  created() {

  },
  mounted() {
    this.getProducts()
  },
  watch: {
    paroductList (newVal) {
      this.selectedAll = true
      newVal.forEach((item) => {
        if(item.checked === false) {
          this.selectedAll = false
        }
      })
    }
  },
  methods: {
    handelGoDetail ({id}) {
      console.log(id)
      this.$router.push(`demo11/${id}`)
    },
    handleManage () {
      this.isManage = !this.isManage
      if(!this.isManage) {
        this.paroductList = [...this.paroductList].map((item) => {
          return {...item,checked: false}
        })
      }
    },
    getProducts () {
      const data = getProducts('fruit')
      this.paroductList = [...data.data].map((item) => {
        return {...item, checked: false}
      })
    },
    handleSelect (val, row, e) {
      const id = row.id
      let list = [...this.paroductList]
      this.paroductList.forEach((item, index, array) => {
        if(item.id === id) {
          list[index].checked = val
        }
      })
      this.paroductList = [...list]
    },
    handleSelectAll (val) {
      this.selectedAll = val
      this.paroductList = [...this.paroductList].map((item) => {
        return {...item,checked: val}
      })
    },
    handleDelete () {
      let list = []
      this.paroductList.filter(item => item.checked===true).forEach(item => {
        list.push(item.id)
      })
      if(!list.length) {
        return
      }
      this.paroductList = [...this.paroductList.filter((item) => !item.checked)]
      // 调删除接口 list
      this.$message.success({
        message: '删除成功',
        offset: 0
      })
      if(!this.paroductList.length) {
        this.isManage = false
        this.selectedAll = false
      }
    }
  },
}
</script>
<style lang="less" scoped>
.manage {
  background-color: white;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding: 0 25px;
  color: #909399;
  span {
    float: right;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  .item {
    width: 50%;
    padding: 10px 15px;
    border: 1px solid #F2F6FC;
    padding-top: 20px;
    box-sizing: border-box;
    margin-left: -1px;
    margin-top: -1px;
    position: relative;
    .select {
      position: absolute;
      left: 8px;
      top: 8px;
    }
    .image {
      width: 100%;
      height: 160px;
    }
    .name {
      margin: 6px 0;
      font-size: 15px;
    }
    .price {
      font-size: 17px;
      color: orange;
    }    
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  height: 50px;
  z-index: 100;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  .select{
    flex: 1;
    margin-left: 30px;
  }
  .delete {
    margin-right: 20px;
  }
}
</style>