<template>
  <div class="login">
      <div class="login-header">
          <div class="container">   
              <a href="/#/index">
                  <img src="/imgs/login-logo.png" alt="">
              </a>
          </div>
      </div>
      <div class="wrapper">
          <div class="container">
              <div class="login-form">
                  <h3 class="form-header">
                      <span class="header-left">帐号登录</span>
                      <span class="line">|</span>
                      <span class="header-right">扫码登录</span>

                  </h3>
                  <div class="form-input">
                      <div class="input">
                          <input type="text" placeholder="请输入账号" v-model="username">
                      </div>
                      <div class="input">
                          <input type="password" placeholder="请输入密码" v-model="password">
                      </div>
                  </div>
                  <div class="form-submit btn" @click="login">
                      <a href="javascript:;" >登录</a>
                      </div>
                  <div class="form-other">
                      <div class="left" @click="register">手机短信登录/注册</div>
                      <div class="right"><span class="l">立即注册</span><span class="m">|</span><span class="r">忘记密码？</span></div>
                  </div>
              </div>
          </div>
      </div>
      <!-- <div class="login-footer">
            <div class="footer-link"></div>
            <div class="copyright"></div>
      </div> -->
      <LoginFooter></LoginFooter>
  </div>

</template>

<script>
import LoginFooter from '../components/LoginFooter'
import { mapActions } from 'vuex'
export default {
    name:'login',
    components:{
        LoginFooter
    },
    data(){
        return{
            username:'',
            password:'',
            userId:'' ,
        }
    },
    methods:{
        login(){
            let {username,password} = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                this.$cookie.set('userId',res.id,{expires:'1M'});
                //to do 保存用户名
                // this.$store.dispatch('saveUserName',res.username);
                this.saveUserName(res.username);
                this.$router.push('/index');
            })
        },
        ...mapActions(['saveUserName']),

        register(){
            this.axios.post('/user/register',{
                username:'abc111',
                password:'1',
                email:'1@163.com'
            }).then((res)=>{
                console.log(res);
                alert('注册成功')
                this.$router.push('/index');
            })
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

    .login{
        .login-header{
            height: 113px;
            .container{      
                height: 100%;      
                img{
                      height: 100%;
                      width: auto;
                }
            }
        }
        .wrapper{
            height: 576px;
            background: url(/imgs/login-bg.jpg) no-repeat center;
            .container{
                height: 100%;
                position: relative;
                .login-form{
                    position: absolute;
                    display: inline-block;
                    height: 510px;
                    width: 410px;
                    background-color: #fff;
                    right: 0px;
                    bottom: 29px;
                    z-index: 10;
                    padding: 0 31px;
                    box-sizing: border-box;
                    .form-header{
                        line-height: 23px;
                        font-size: 24px;
                        margin: 40px 0 49px;
                        text-align: center;
                        .header-left{
                            color: $colorA;
                        }
                        .line{
                            margin: 0 32px;
                        }
                    }
                    .form-input{
                        .input{
                            height: 50px;
                            width: 348px;
                            margin-bottom: 20px;
                            border: 1px solid $colorH;
                            input{
                                border: none;
                                height: 100%;
                                width: 100%;
                                padding:18px;
                                font-size: 14px;
                                box-sizing: border-box;
                            }
                        }
                    }
                    .form-submit{
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                        margin-top: 10px;
                        a{
                            color: #fff;
                        }
                    }
                    .form-other{
                        @include flex();
                        font-size: 14px;
                        margin-top: 14px;
                        .left{
                            cursor: pointer;
                            color: $colorA;
                        }
                        .right{
                            color: $colorD; 
                            .l,.r{
                                cursor: pointer;
                            }
                            .m{
                                margin: 0 7px;
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>