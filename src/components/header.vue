<template>
  <div>
    <div class="header">
      <i :class="icon.icon1" @click="handleBack"></i>
      <div class="title">{{title}}</div>
      <i :class="icon.icon2"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, default: () => '商品列表'},
    icon: {
      type: Object,
      default: () => {
        return {
          icon1: 'el-icon-arrow-left', icon2: 'el-icon-search'
        }
      }
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleBack () {
      this.$router.go(-1)
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
</style>