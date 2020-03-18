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
