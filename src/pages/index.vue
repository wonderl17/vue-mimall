<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li v-for="(menu,id) in swiperMenus" :key="id" class="menu-item">
                            <a class="itemkey" href="javascript:;">{{menu.name}}</a>
                            <div class="children">
                                <ul v-for="(item,index1) in menu.menuList" :key="index1">
                                    <li v-for="(sub,index2) in item" :key="index2" >
                                        <a :href="sub?'/#/product/'+ sub.id:''">
                                            <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiperSlide class="swiper-no-swiping" v-for="(item,index) in slideList" :key="index"> 
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>

                </swiper>      
            </div>
            <div class="ads-box">

            </div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'index',
    components:{
        ServiceBar,
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption:{
                autoplay: true,
                loop: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable: true,
                },
                preventInteractionOnTransition : true, //防止拖动
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                 },
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                 {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ],    
            swiperMenus:[
                {
                    name:'手机 电话卡',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'电视 盒子',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'家电 插线板',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'出行 穿戴',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'智能 路由器',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'耳机 音箱',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
                {
                    name:'电源 配件',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },{
                    name:'生活 箱包',
                    menuList:[
                        [
                           {
                               id:30,
                               img: '/imgs/item-box-1.png',
                               name: '小米CC9'
                           },
                           {
                               id:31,
                               img: '/imgs/item-box-2.png',
                               name: '小米8青春版'
                           },{
                               id:32,
                               img: '/imgs/item-box-3.jpg',
                               name: 'Redmi K20 Pro'
                           },{
                               id:33,
                               img: '/imgs/item-box-4.jpg',
                               name: '移动4G专区'
                           },
                        ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                    ],
                },
            ]
        }
    }
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

    .index{
        .swiper-box{
            .swiper-container{
                height: 451px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .swiper-button-prev{
                    left: 274px;
                }
                .swiper-pagination{
                   position: absolute;
                   text-align: right;
                   width: 400px;
                   right: 30px;
                   left: auto;
                   bottom: 25px;
                   .swiper-pagination-bullet{
                       width: 6px;
                       height: 6px;
                       border: 2px solid #fff;
                       border-radius: 10px;
                       border-color: hsla(0, 0%, 100%, .3);
                       overflow: hidden;
                       background: rgba(0,0,0,.4);
                       opacity: 1;
                   }
                   .swiper-pagination-bullet-active{
                       background: hsla(0,0%,100%,.4);
                       border-color: rgba(0,0,0,.4);
                   }
                }
            }
            .nav-menu{
                position: absolute;
                box-sizing: border-box;
                width: 264px; 
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a7a;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        .itemkey{
                            font-size: 16px;
                            color: #fff;
                            padding-left: 30px;
                            position: relative;
                            display: block;
                            &::after{
                                position: absolute;
                                right: 30px;
                                top: 17px;
                                content: '';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');

                            }
                        }

                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }    

                        .children{
                            display: none;
                            box-sizing: border-box;
                            box-shadow: 0px 7px 7px 0px rgba(0,0,0,0.11);;
                            position: absolute;
                            left: 264px;
                            top: 0;
                            width: 962px;
                            height: 451px;
                            background-color: #fff;
                            border: 1px solid $colorH;

                            ul{
                                // width: 100%;
                                height: 75px;
                                display: flex;
                                justify-content: space-between;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    // width: 241px;
                                    flex:1;
                                    padding-left: 23px;
                                    
                                    a{
                                        color: $colorB;
                                        font-size: 14px;

                                        img{
                                        height: 42px;
                                        width: 35px;
                                        vertical-align: middle;
                                        margin-right: 15px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>