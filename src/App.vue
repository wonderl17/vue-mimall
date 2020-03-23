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
// import storage from './storage'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      age: 30,
      data1: '',
      data2: '',
      res:{}
    }
  },
  mounted(){
      // storage.setItem('a',1)
      // storage.setItem('user',{'a':1})
      // storage.clear('a')
      // storage.clear('a','user')

    //   let url = "/api/common/adver-getadver"
    // jsonp(url,(err,res)=>{
    //     let result = res;
    //     this.data1 = result;
    // })
    // axios(url).then((res)=>{
    //     let result = res;
    //     this.data2 = result;

    // this.axios.get('/user/login').then((res)=>{
    //     this.res =res;
    //     console.log(this.res);
        
    // })
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
