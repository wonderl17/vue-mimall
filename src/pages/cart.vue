<template>
  <div class="cart">
      <order-header :title="title">
          <template slot='tip'> 
              <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
          </template>
      </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="cart-box">
                    <ul class="cart-item-head">
                        <li class="col-1"><span class="checkbox" :class="allChecked?'checked':''" @click="selectedAll(allChecked)"></span>全选</li>
                        <li class="col-3">商品名称</li>
                        <li class="col-1">单价</li>
                        <li class="col-1">库存</li>
                        <li class="col-2">数量</li>
                        <li class="col-1">小计</li>
                        <li class="col-1">操作</li>
                    </ul>
                    <ul class="cart-item-list" >
                        <li class="cart-item" v-for="(item,index) in list" :key='index'>
                            <div class="item-check col-1">
                                <span class="checkbox" :class="{checked:item.productSelected}" @click="updateCart(item)"></span>
                            </div>
                            <div class="item-name col-3"><img v-lazy="item.productMainImage"><span>{{item.productName}} , {{item.productSubtitle}}</span></div>
                            <div class="item-price col-1">￥{{item.productPrice}}</div>
                            <div class="item-price col-1">{{item.productStock}}件</div>
                            <div class="item-num col-2">
                                <div class="num-box">
                                    <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                                    <span>{{item.quantity}}</span>
                                    <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                                </div>
                            </div>
                            <div class="item-total col-1">￥{{item.productTotalPrice}}</div>
                            <div class="item-del col-1" @click="delItem(item)"></div>
                        </li>
                    </ul>
                </div>
                <div class="order-wrap clearfix">
                    <div class="cart-tip fl">
                        <a href="">继续购物</a>共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
                    </div>
                    <div class="total fr">
                        合计：<span>{{cartTotalPrice}}</span>元
                        <button class="btn btn-large" @click="order">去结算</button>
                    </div>
                </div>
            </div>
        </div>
       <ServiceBar></ServiceBar>
       <nav-footer></nav-footer>

  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'
// import {Message} from 'element-ui'

export default {
    name:'cart',
    components:{
        OrderHeader,
        NavFooter,
        ServiceBar
    },
    data(){
        return{
            title: '我的购物车',
            list:[],//商品列表
            allChecked:false,//是否全选
            cartTotalPrice:0,//商品总金额
            checkedNum:0//选中商品数量
        }
    },
    computed:{
        // username(){
        //     return this.$store.state.username;
        // }
    },
    mounted(){
        this.getCartList();
    },
    methods:{
        getCartList(){
            this.axios.get('/carts').then((res)=>{
                this.dataRender(res);
            })
        },
        dataRender(res){
            this.list = res.cartProductVoList||[];
            this.allChecked = res.selectedAll;
            this.cartTotalPrice = res.cartTotalPrice;
            this.checkedNum = this.list.filter(item=>item.productSelected).length;
        },
        //更新购物车某个产品状态（是否选中和数量）
        updateCart(item,type){
            let selected = item.productSelected;
            let quantity = item.quantity
            if(type =='+'){
                if(quantity > item.productStock){
                    // this.$message.warning('购买数量不能超过库存数量')
                    this.$message.warning('购买数量不能超过库存数量')
                    return;
                }
                quantity += 1;
            }else if(type == '-'){
                if(quantity == 1){
                    // this.$message.warning('商品至少保留一件')
                    // console.log(this);
                    this.$message.info('商品至少保留一件');
                    return;
                }
                quantity -= 1;
            }else{
                selected = !selected;
            }
            this.axios.put(`/carts/${item.productId}`,{
                selected: selected,
                quantity: quantity

            }).then((res)=>{
               this.dataRender(res);
            })
        },
        delItem(item){
            this.axios.delete(`/carts/${item.productId}`).then((res)=>{
                this.dataRender(res);
                this.$message.success('删除成功')
            })
        },
        selectedAll(allChecked){

            if(this.list.length>0){
                console.log(this.list);
                
            if(!allChecked)
                this.axios.put('/carts/selectAll' 
                ).then((res)=>{
                    this.dataRender(res);
                })
            else
                this.axios.put('/carts/unSelectAll' 
                ).then((res)=>{
                    this.dataRender(res);
                })
            }
            else{
                this.allChecked = !allChecked;
            }
        },
        order(){
            if(this.checkedNum < 1){
                // alert('请至少选择一件商品');
                // this.Message.warning(res.msg)
                this.$message.info('请至少选择一件商品')
                return;
            }else{
                this.$message.success('提交成功')
                this.$router.push('/order/confirm')
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
    .cart{
    .wrapper{
        background-color: #f5f5f5;
        padding-top: 30px;
        padding-bottom: 114px;
        .container{
            .cart-box{
                background-color: #fff;
                text-align: center;
                font-size: 14px;
                .checkbox{
                    height: 22px;
                    width: 22px;
                    display: inline-block;
                    border: 1px solid #e5e5e5;
                    vertical-align: middle;
                    cursor: pointer;
                }
                .checked{
                    background:url(/imgs/icon-gou.png) #f60 no-repeat 50%;
                    border: none;
                    background-size: 16px 12px;
                }
                 .col-1{
                        flex: 1;
                    }
                    .col-2{
                        flex: 2;
                    }
                    .col-3{
                        flex: 3;
                    }
                    .checkbox{
                        margin-right: 17px;
                    }
                .cart-item-head{
                    height: 79px;
                    line-height: 79px;
                    display: flex;
                    color: #999999;
                   
                }
                
                .cart-item{
                    border-top: 1px solid #e5e5e5;
                    height: 125px;
                    display: flex;
                    align-items: center;
                    .item-name{
                        font-size: 18px;
                        color: #333;
                        display: flex;
                        align-items: center;
                        img{
                            width: 80px;
                            height: 80px;
                            vertical-align: middle;
                        }
                        span{
                            margin-left: 30px;
                        }   
                    }
                    .item-price{
                        font-size: 16px;
                    }
                    .item-total{
                        font-size: 16px;
                        color:#f60
                    }
                    .item-num{
                        .num-box{
                            display: inline-block;
                            width: 150px;
                            height: 40px;
                            line-height: 40px;
                            border: 1px solid #e5e5e5;
                            a,span{
                                display: inline-block;
                                width: 50px;
                                height: 100%;
                            }
                            
                        }
                    }
                    .item-del{
                        @include bgImg(14px,12px,'/imgs/icon-close.png');
                        cursor: pointer;
                    }
                }

            }
            .order-wrap{
                height: 50px;
                margin-top: 20px;
                .cart-tip{
                    height: 100%;
                    line-height: 50px;
                    font-size: 14px;
                    color: #666;
                    a{
                       color: #666;
                        margin-right: 37px;
                        margin-left: 29px;
                    }
                    span{
                        color: #f60;
                        margin: 0 5px;
                    }
                }
                .total{
                    font-size: 14px;
                    color: #f60;
                    span{
                        font-size: 24px;
                    }
                    .btn{
                        margin-left: 37px;
                    }
                }
            }
        }
    }
    }
</style>