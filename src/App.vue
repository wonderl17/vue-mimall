<template>
  <div id="app">
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// import jsonp from 'jsonp'
import storage from './storage'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      age: 30,
      data1: '',
      data2: ''
    }
  },
  mounted(){
      // storage.setItem('a',1)
      // storage.setItem('user',{'a':1})
      // storage.clear('a')
      storage.clear('a','user')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
