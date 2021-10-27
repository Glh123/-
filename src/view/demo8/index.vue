<template>
  <div>
    <p>任务8和任务11相似</p>
    <div class="btn">
      <el-button type="primary" @click="go">go 任务11</el-button>  
    </div>

  </div>
</template>

<script>
export default {
data() {
  return {

  }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    go (){
      this.$router.push('/demo11')
    }
  },
}
</script>
<style scoped>
p{
  text-align: center;
  margin-top: 50px;
}
.btn{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>