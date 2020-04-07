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
                                            <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                        <a :href="'/#/product/'+item.id">
                        <img :src="item.img" v-if="index==0||index==(slideList.length-1)">
                        <img v-lazy="item.img" v-else> </a>
                    </swiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>

                </swiper>      
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v:lazy="/imgs/banner-1.png" alt="">
                </a>
            </div>
            
        </div>
        <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <img src="/imgs/mix-alpha.jpg" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key='j'>
                                <span v-show="j%2==0" class="new-pro">新品</span>
                                <span v-show="j%2==1" class="kill-pro">秒杀</span>

                                <div class="item-img">
                                    <img v-lazy="item.mainImage">
                                    <!-- <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt=""> -->
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>   
            </div>
        <service-bar></service-bar>
        <Modal 
            title="提示" 
            sureText="查看购物车" 
            btnType="1" 
            modalType="middle" 
            :showModal="cartSuccess"
            @submit="goToCart"
            @cancel="cartSuccess=false"

            >
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
            </Modal>

            <Modal 
            title="提示" 
            sureText="请登录" 
            btnType="1" 
            modalType="middle" 
            :showModal="cartFaild"
            @submit="goToLogin"
            @cancel="cartFaild=false"
            >
            <template v-slot:body>
                <p>商品添加失败！</p>
            </template>
            </Modal>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'

import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'index',
    components:{
        ServiceBar,
        swiper,
        swiperSlide,
        Modal
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
                // preventInteractionOnTransition : true, //防止拖动
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
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },
                {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },
                {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                },
            ],
            phoneList:[],
            cartSuccess:false,
            cartFaild:false
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            // this.axios.get('/products',{
            //     params:{
            //         categoryId:100012,
            //         pageSize:8
            //     }
            // }).then((res=>{
            //     this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
            // }))


            this.axios.get('/products',{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then((res)=>{

                res.list = res.list.slice(6,14);
                this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
            }) 
        },
        addCart(id){
            this.axios.post('/carts',{
                productId:id,
                selected:true
            }).then((res)=>{
                this.cartSuccess=true;
                this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
                
            }).catch(()=>{
                this.cartFaild=true;
                // this.$router.push('/login')
        })
        },
        goToCart(){
            this.$router.push('/cart');
        },
        goToLogin(){
            this.$router.push('/login');
        },
        swiperInit(){

        }
    }
}
</script>

<style lang='scss'>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';

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
        .ads-box{
            margin-top: 14px;
            margin-bottom: 31px;
            @include flex();
            a{
                width: 296px;
                height: 167px;
            }

        }
        .banner{
            margin-bottom: 50px;
        }
        .product-box{
            background-color: $colorJ;
            padding: 30px 0 50px;
            box-sizing: border-box;
            h2{
                font-size: 22px;
                color: $colorB;
                height: 21px;
                line-height: 21px;
                margin-bottom: 10px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    width: 224px;
                    height: 619px;
                    margin-right: 16px;
                }
                .list-box{
                    width: 986px;
                    .list{
                        @include flex(); 
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0;
                        } 
                        .item{
                            width: 236px;
                            height: 302px;
                            background-color: $colorG;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                line-height: 24px;
                                font-size: 14px;
                                font-weight: bold;
                                color: $colorG;
                                &.new-pro{
                                    background-color: #7ecf68;
                                }
                                &.kill-pro{
                                    background-color: #e82626;
                                }
                            }
                            .item-img{
                                img{
                                    height: 150px;
                                    width: auto;
                                }
                                margin-bottom: 10px;
                                margin-top: 20px;
                            }
                            .item-info{     
                                h3{
                                    font-size: 14px;
                                    color: $colorB;
                                    line-height: 14px;
                                    font-weight: bold;
                                }
                                p{
                                    color: $colorD;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price{
                                    color: #F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &::after{
                                        content: '';
                                        margin-left: 5px;
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                        vertical-align: middle;
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