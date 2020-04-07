<template>
  <div class="nav-bar" :class="{'is-fixed':isFixed}">
      <div class="container">
          <div class="pro-title">
            {{product.name}}
          </div>
          <div class="pro-param">
              <a href="">概述</a><span>|</span>
              <a href="">参数</a><span>|</span>
              <a href="" class="last">用户评价</a>
               <slot name="buy"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    data(){
        return{
            isFixed: false

        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight)
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152? true: false;
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.initHeight)

    },
    props:['product']
}
</script>

<style lang="scss">
 @import '../assets/scss/config.scss';

 @import '../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: #fff;
        z-index: 11;
        &.is-fixed{
            position: fixed;
            top: 0;
            width: 100%;
            box-shadow: 0 5px 5px  #ccc;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: 18px;
                font-weight: bold;
                color: $colorB;
            }
            .pro-param{
                font-size: 14px;
                color: $colorC;
                a{
                    color: $colorC;
                    margin-right: 10px;
                }
                    
                span{
                    margin-right: 10px;
                }
            }
        }
    }
</style>