<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body{
  margin: 0;
  padding: 0;
}
.container {
  padding: 4px 2px;
  background-color: rgb(248, 244, 244);
  border: 1px solid transparent;
  min-height: 600px;
}
</style>
