<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
        <div class="content">
          <a href="">主页</a>
          <a href="javascript:;"   @click="quit">退出登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'order-header',
    data(){
      return{
        
      }
    },
    props:{
      title:String,
    },  
    computed:{
      ...mapState(['username'])
    },
    methods:{
      quit(){
        this.axios.post('/user/logout').then(()=>{
          this.$message.success('退出成功');
          // this.$store.dispatch('saveUserName','');
          this.$cookie.delete('userId')
          this.$router.push('/login')

        }).catch(()=>{
          alert('failed')
        })
      }
    }
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

 .order-header{
    padding:30px 0;
    border-bottom:2px solid #FF6600;
    .header-logo{
      float:left;
    }
    .title,.username{
      display:inline-block;
      height:55px;
      line-height:55px;
    }
    .title{
      float:left;
      margin-left:54px;
      h2{
        font-size:28px;
        color:#333333;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999999;
        font-weight:200;
      }
    }
    .username{
      float:right;
      position: relative;
      text-align: center;
      padding: 0 30px;
      // width: 100px;
      a{
        color:#666666;
        font-size:16px;
        }
      &:hover{
        .content{
          display: block;
          }

        }
        .content{
          display: none;
          position: absolute;
          text-align: center;
          top: 40px;
          left: -8px;
          line-height: 20px;
          font-size:16px;
          width: 100px;
          // width: 100%;
          a{
            padding: 5px 0;
            display: block;
            height: 20px;
            // width: auto;
            // width: 55px;
            background-color: #ccc;
            &:hover{
              background-color: #f60;
              color: #fff;
            }
          }
      }
      
    }
  }
</style>