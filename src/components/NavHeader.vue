<template>
  <div class="header">
    <div class="nav-topbar">
        <div class="container">
          <div class="topbar-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MIU</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="javascript:;" v-if="!username" @click="login">登陆</a>

            <a href="javascript:;" v-if="username">我的订单</a> 
            <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart">
              </span>购物车</a>
          </div>  
        </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+ item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price |currency}}</div>
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <!-- <div class="children"></div> -->
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90" alt="">
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'nav-header',
    data(){
      return{
        username: '',
        phoneList:[]
      } 
    },
    filters:{
      currency(val){
        if(!val) return '0.00';
        return '￥'+val.toFixed(2)+'元';
      }
    },
    mounted(){
      this.getProductList();
    },
    methods:{
      login(){
        this.$router.push('/login')
      },
      getProductList(){
        this.axios.get('/products',{
          params:{
            categoryId:'100012',
            pageSize:''
          }
        }).then((res)=>{
          if(res.list.length>6){
            this.phoneList = res.list.slice(0,6);
          }else{
            this.phoneList = res.list
          }
        })
      },
      goToCart(){
        this.$router.push('/cart')
      }
    }
}
</script>

<style lang='scss'>
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container{
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        @include flex();

        a{
          display: inline-block;
          color:#B0B0B0;
          margin-right: 17px;
        }
        .my-cart{
          width: 110px;
          background: #FF6600;
          text-align: center;
          color: white;
          .icon-cart{
            @include bgImg(20px,15px,'/imgs/icon-cart-checked.png');
            // display: inline-block;
            // height: 12px;
            // width: 16px;
            vertical-align: text-top;
            // background:url('/imgs/icon-cart-checked.png') no-repeat center;
            // background-size: contain;
            margin-right: 4px;
          }
        }
     }
    }
    .nav-header{
      .container{
        height: 112px;
        @include flex();
        position: relative;
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;

          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before{
              content: '';
              @include bgImg(55px,55px,'/imgs/mi-logo.png');
              // display: inline-block;
              // width: 55px;
              // height: 55px;
              // background: url('/imgs/mi-logo.png') no-repeat center;
              // background-size: contain;
              transition: margin .2s;
            }
            &:after{
              content: '';
             @include bgImg(55px,55px,'/imgs/mi-home.png');

              // display: inline-block;
              // width: 55px;
              // height: 55px;
              // background: url('/imgs/mi-home.png') no-repeat center;
              // background-size: contain;
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
           display: inline-block;
           width: 643px;
           padding-left: 209px;
           .item-menu{
             display: inline-block;
             color:#333333;
             font-weight: bold;
             font-size: 16px;
             line-height: 112px;
             margin-left: 20px;
             span{
               cursor:pointer;
             }
             &:hover{
               color: $colorA;
               .children{
                 height: 220px;
                 opacity: 1;
                 transition: 0.3s;
               }
             }
             .children{
              //  display: none;
              //  display: block;
               height: 0;
               overflow: hidden;
               opacity: 0;
               transition: 0.5s;
               position: absolute;
               top: 112px;
               left: 0;
               width: 1226px;
               border-top: 1px solid #e5e5e5;
               box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
               z-index: 10;
               background-color: #ffffff;
               
               .product{
                 position: relative;
                 float:left;
                 width: 16.6%;
                 height: 220px; 
                 font-size: 12px;
                 line-height: 12px;
                 text-align: center;
                 img{
                   height: 111px;
                   width: auto;
                   margin-top: 26px;
                 }
                 a{
                   display: inline-block;
                   .pro-img{
                     height: 137px;

                   }
                   .pro-name{
                     font-weight: 700;
                     margin-top: 19px;
                     margin-bottom: 8px;
                     color: $colorB;

                   }
                   .pro-price{
                     color: $colorA;
                   }
                 }

                 &:before{
                 content:'';
                 position: absolute;
                 top:28px;
                 right: 0;
                 border-left: 1px solid $colorF;
                 height: 100px;
                 width: 1px;
                }
                &:last-child:before{
                  display: none;
                }

               }
             }
           }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            // @include flex();
            display: flex;
            align-items: center;
            border: 1px solid #e0e0e0;
            input{
              border:none;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              box-sizing: border-box;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              // display: inline-block;
              // width: 18px;
              // height: 18px;
              // background: url('/imgs/icon-search.png') no-repeat center;
              // background-size: contain;
              margin-left: 17px;
            }
          }
        }
      }
    }

  }
</style>