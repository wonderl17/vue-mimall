<template>
  <div class="product">
      <ProductParam :product='product'>
        <template v-slot:buy>
          <button class="btn" @click="buy">立即购买</button>
        </template>
      </ProductParam>
      <div class="content">
        <div class="item-bg1">
          <h2>{{product.name}}</h2>
          <h3>{{product.subtitle}}</h3>
          <p>
            <a href="javascript:;">全球首款双频 GP</a><span>|</span>
            <a href="javascript:;">骁龙845</a><span>|</span>
            <a href="javascript:;">AI 变焦双摄</a><span>|</span>
            <a href="javascript:;">红外人脸识别</a>
          </p>
          <div class="price">
            <span>￥<em>{{product.price}}</em></span>
          </div>
        </div>
        <div class="item-bg2"></div>
        <div class="item-bg3"></div>
        <div class="item-swiper">
          <swiper class="swiper" :options="swiperOption" >
              <swiper-slide v-for="(item,index) in slideList" :key='index'>
                 <img :src="item.imgurl" alt="">
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <h2>小米8 AI变焦双摄拍摄</h2>

        </div>
        <div class="item-video">
          <h2>60帧超慢动作摄影<br/>
             慢慢回味每一瞬间的精彩
          </h2>
          <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>
             更能AI 精准分析视频内容，15个场景智能匹配背景音效。
          </p>
          <div class="video-bg" @click="clickVideo"></div>
          <!-- <transition name='video-slide'> -->
            <div class="video-box" v-show="slideShow">
              <div class="overlay"  @click="closeVideo"></div>
                <div class="video" :class="slideShow">
                  <span class="icon-close" @click="closeVideo"></span>
                  <video src="/imgs/product/video.mp4" 
                    controls="controls"
                    ref="video"
                  >
                  </video>
              </div>
            </div>
          <!-- </transition> -->
        </div>

      </div>


  </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {

    name:'product',
    components:{
      ProductParam,
      swiper,
      swiperSlide
    },
    mounted(){
      this.getProductInfo();
    },
    methods:{
        closeVideo(){
          this.slideShow = 'slideUp';
          this.$refs.video.pause();
          setTimeout(()=>{
            this.slideShow = '';          
            },500)
        },
        clickVideo(){
          this.slideShow = 'slideDown';
          setTimeout(()=>{
             this.$refs.video.play();
          },500)
        },
        getProductInfo(){
          let id = this.$route.params.id;
          this.axios.get(`/products/${id}`).then((res)=>{
              this.product = res;
              console.log(this.product);
              
          })
          
        },
        buy(){
          let id = this.$route.params.id;
          // this.$router.push('/detail/'+id);
          this.$router.push(`/detail/${id}`)
        }
    },
    data() {
      return {
        product:{},//商品信息
        slideList:[
          {
            imgurl:('/imgs/product/gallery-2.png')
          },
          {
            imgurl:('/imgs/product/gallery-3.png')
          },
          {
            imgurl:('/imgs/product/gallery-4.png')
          },
          {
            imgurl:('/imgs/product/gallery-5.jpg')
          },
          {
            imgurl:('/imgs/product/gallery-6.jpg')
          }
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        // videoShow: ''
        slideShow:''//控制动画效果
      }
    }
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
    .product{
      .content{
        .item-bg1{
          background: url(/imgs/product/product-bg-1.png)  center no-repeat;
          height: 718px;
          text-align: center;
          h2{
            padding-top: 55px;
            font-size: 80px;
          }
          h3{
            font-size: 24px;
            letter-spacing: 10px;
          }
          p{
            font-size: 16px;
            margin-top: 21px;
            margin-bottom: 40px;
            a{
                color: #333;
                
            }
            span{
                font-size: 12px;
                color: #333;
                margin: 15px;
            }
          }
          .price{
            font-size: 30px;
            em{
                font-style: normal;
                font-size: 38px;
            }
          }
        }
        .item-bg2{
          background: url(/imgs/product/product-bg-2.png) no-repeat center;
          height: 480px;
          background-size: auto 397px;
        }
        .item-bg3{
          background: url(/imgs/product/product-bg-3.png) no-repeat center;
          height: 638px;
          background-size: cover;
        }
        .item-swiper{
          margin: 36px auto 52px;
          h2{
            text-align: center;
            font-size: 18px;
            font-weight: normal;
          }
          img{
            width: 100%;
          }
        }
        .item-video{
          text-align: center;
          background-color: #070708;
          color: #fff;
          height: 1044px;
          margin-bottom: 76px;
          h2{
            font-size: 60px;
            padding-top: 82px;
            margin-bottom: 47px;
          }
          p{
            font-size: 24px;
            margin-bottom: 58px;
          }
          .video-bg{
            position: relative;
            background: url('/imgs/product/gallery-1.png') no-repeat center;
            background-size: cover;
            margin: 0 auto;
            height: 540px;
            width: 1226px;
            cursor: pointer;
          }
          .video-box{
            .overlay{
              @include position(fixed);
              background-color: #333333;
              opacity: .4;
            }
            @keyframes slideDown{
              from{
                top: -50%;
                opacity: 0;
              }
              to{
                top: 50%;
                opacity: 1;
              }
            }
            @keyframes slideUp {
              from{
                top: 50%;
                opacity: 1;
              }
              to{
                top: -50%;
                opacity: 0;
              }
            }
            .video{
              position: fixed;
              top: -50%;
              left: 50%;
              width: 1000px;
              height: 536px;
              transform: translate(-50%,-50%);
              box-shadow: 1px 1px 11px #cccccc;
              &.slideDown{
                animation: slideDown .6s linear;
                top:50%;
                opacity: 1;
              }
              &.slideUp{
                animation: slideUp .6s linear;
                top:-50%;
                opacity: 0;
              }
              .icon-close{
                display: inline-block;
                @include positionImg(absolute,23px,25px,20px,20px,'/imgs/icon-close.png');
                cursor: pointer;
                z-index: 10;
                &:hover{
                    transform: scale(1.1);
                }
              }
              video{
                width: 100%;
                height: 100%;
                outline: none;
                object-fit:cover;
                
              }
            }
            
          }
        }
      }
    }
    


</style>