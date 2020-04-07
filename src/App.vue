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
    if(this.$cookie.get('userId')){
        this.getUser();
        this.getCartCount();
    }
  
  },
  updated(){
    // this.getCartCount();

  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //to do 保存到 vuex里
        this.$store.dispatch('saveUserName',res.username);

      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        //to do 保存到 vuex里
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang='scss'>
/* @import './assets/scss/config.scss'; */ 
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/button.scss';

@import './assets/scss/modal.scss';




/* @import './assets/scss/config.scss'; */

</style>
