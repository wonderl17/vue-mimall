<template>
  <div class="order-confirm">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <div class="addr-head">收货地址</div>
            
            <div class="addr-list">
              <div class="addr-info" v-for="(item,i) in list" :key='i' @click="checked(i)" :class="{checked:(check==i)}">
                <h2>{{item.receiverName}}</h2>
                <div class="phone">{{item.receiverMobile}}</div>
                <div class="street">{{item.receiverProvince}} {{item.receiverCity}} {{item.receiverDistrict}} {{item.receiverAddress}}</div>
                <div class="action">
                  <a href="javascript:;">
                    <svg class="icon icon-del" @click.stop="clickOption('2',item)">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                  <a href="javascript:;">
                    <svg class="icon icon-edit" @click.stop="clickOption('1',item)">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <!-- <div class="addr-info checked">
                  <h2>jack</h2>
                  <div class="phone">13880756658</div>
                  <div class="street">北京 海淀 苏家坨 12</div>
                  <div class="action"></div>
              </div> -->
              <div class="addr-add" @click="clickOption('0')">
                  <div class="icon-add"></div>
                  <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-goods">
            <h2>商品</h2>
            <ul>
              <li v-for="(item,i) in cartList" :key="i">
                <div class="good-name"><img :src="item.productMainImage" alt="">{{item.productName}},{{item.productSubtitle}}</div>
                <div class="good-price">￥{{item.productPrice}} x {{item.quantity}}</div>
                <div class="good-total">￥{{item.productTotalPrice}}元</div>
              </li>
              <!-- <li>
                <div class="good-name"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg" alt=""> Redmi K20 Pro 尊享版 骁龙855 Plus， 弹出全面屏</div>
                <div class="good-price">2699元x1</div>
                <div class="good-total">2699元</div>
              </li>
              <li>
                <div class="good-name"><span></span>Redmi K20 Pro 尊享版 骁龙855 Plus， 弹出全面屏</div>
                <div class="good-price">2699元x1</div>
                <div class="good-total">2699元</div>
              </li> -->
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
             <h2>发票</h2>
             <a href="javascript:;">电子发票</a>
             <a href="javascript:;">个人</a>

          </div>
          <div class="detail">
            <div class="item"><span class="item-name">商品件数：</span><span class="item-val">{{getNum()}}件</span></div>
            <div class="item"><span class="item-name">商品总价：</span><span class="item-val">{{cartTotalPrice}}元</span></div>
            <div class="item"><span class="item-name">优惠活动：</span><span class="item-val">{{disCount}}元</span></div>
            <div class="item"><span class="item-name">运费：</span><span class="item-val">{{carriagePay}}元</span></div>
            <div class="item-total"><span class="item-name">应付总额：</span><span class="item-val">{{getTotalPrice()}}元</span></div>
          </div>
          <div class="btn-group">
            <button class="btn btn-large btn-default" @click="goToCart">返回购物车</button>
            <button class="btn btn-large" @click="orderSubmit">去结算</button>

          </div>
        </div>
      </div>
    </div>
    <Modal :title="modalTitle"
           btnType="1"
           sureText="确定"
           :showModal="showModal"
           @submit='addrOp(userAction)'
           @cancel='close'
    >
        <template slot="body">
          <div class="edit-wrap">
            <div class="item">
              <input type="text" placeholder="姓名" class="input" maxlength="10" v-model="addrObj.receiverName">
              <input type="text" placeholder="手机号" class="input" maxlength="11" v-model="addrObj.receiverMobile">

            </div>
            <div class="item">
              <select name="province" v-model="addrObj.receiverProvince">
                <option value="北京">北京市</option>
                <option value="天津">天津市</option>
                <option value="河北省">河北省</option>
              </select>
              <select name="city" v-model="addrObj.receiverCity">
                <option value="北京">北京市</option>
                <option value="天津">天津市</option>
                <option value="河北">石家庄市</option>

              </select>
              <select name="district" v-model="addrObj.receiverDistrict">
                <option value="北京">海淀区</option>
                <option value="北京">朝阳区</option>
                <option value="北京">大兴区</option>

              </select>
              
            </div>
            <div class="item">
              <textarea name="street" id="" cols="30" rows="10" v-model="addrObj.receiverAddress"></textarea>
            </div>
            <div class="item">
              <input type="text" placeholder="邮编" class="input" maxlength="6" v-model="addrObj.receiverZip">
            </div>
          </div>
        </template>
    </Modal>
    <Modal :title="modalTitle"
           btnType="3"
           sureText="确定"
           cancelText="取消"
           :showModal="showDelModal"
           @submit='addrOp(userAction)'
           @cancel='close'
    >
      <template slot="body">
          <div class="delete-wrap">
            <div class="name">
              姓名：{{addrObj.receiverName}}
            </div>
            <div class="phone">
              电话：{{addrObj.receiverMobile}}
            </div>
            <div class="address">
              地址：{{addrObj.receiverProvince}} {{addrObj.receiverCity}} 
              {{addrObj.receiverDistrict}} {{addrObj.receiverAddress}}
            </div>
            <div class="post">
              邮编：{{addrObj.receiverZip}}
            </div>
          </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'
import OrderHeader from '../components/OrderHeader'
export default {
    name:'order-confirm',
    components:{
      Modal,
      OrderHeader
    },
    data(){
      return{
        list:[],            //收货地址列表
        cartList:[],        //购物车中需要结算的列表
        cartTotalPrice: 0,  //购物车总价格
        check: 0,           //地址选中
        checkedNum:0,       //商品数量
        carriagePay:0,      //运费
        disCount:0,         //优惠

        showModal:false,     //弹框显示
        userAction:'',        //用户行为 0：新增 1：编辑 2：删除
        addrObj:{},           //选中的地址对象
        // addrId:0,             //选中地址的id
        modalTitle:'',         //弹框标题
        showDelModal:false,    //删除弹框
        lock: true
      }
    },
    methods:{
      getAddrList(){
          this.axios.get('/shippings').then((res)=>{
              this.list = res.list;
          })
      },
      getCartList(){
          this.axios.get('/carts').then((res)=>{
              let list = res.cartProductVoList
              this.cartList = list.filter(i=>i.productSelected);
              this.cartTotalPrice = res.cartTotalPrice;
          })
      },
      checked(id){
        if(id == this.check){
          this.check = -1;
        }
        else{
          this.check = id;
        }
      },
      getNum(){
        let sum = 0;
        this.cartList.forEach((e)=>{
          sum += e.quantity;
        })
        
        return sum;
      },
     
      getTotalPrice(){  
        return (this.cartTotalPrice + this.carriagePay - this.disCount);
      },
      goToCart(){
        this.$router.push('/cart')
      },
      deleteAddr(shippingId){
        // /shippings/{shippingId}
            this.axios.delete(`/shippings/${shippingId}`).then(()=>{
            this.getAddrList()

        }).then(()=>{
            this.$message.success('删除成功')

        })
      },
      editAddr(shippingId,addr){
            this.axios.put(`/shippings/${shippingId}`,addr).then(()=>{
            this.getAddrList()
          }).then(()=>{
            this.$message.success('编辑成功')

          })

      },
      addAddr(addr){
            this.axios.post('/shippings',addr).then(()=>{
            this.getAddrList()
          }).then(()=>{

          })
      },
      addrOp(userAction){
            // console.log('Promise');
              let addr = this.addrObj;
              let shippingId = addr.id;
              let method,url,message,params={};
              if(userAction == 0){
                  method = 'post'
                  url = '/shippings'
                  message = '添加成功'
              }else if(userAction == 1){
                  method = 'put'
                  url = `/shippings/${shippingId}`
                  message = '编辑成功'

              }else{
                  method = 'delete',
                  url = `/shippings/${shippingId}`
                  message = '删除成功'

              }
              if(userAction == 0 || userAction ==1){
                 
                  if(JSON.stringify(addr)=="{}"){
                    this.$message.warning('请输入地址信息')
                    return;
                  }else if(!addr.receiverName){
                    this.$message.warning('请输入姓名')
                    return; 
                  }else if (!addr.receiverMobile){
                    this.$message.warning('请输入电话号码')
                    return;
                  }else if (!addr.receiverProvince){
                    this.$message.warning('请选择省份')
                    return;
                  }else if (!addr.receiverCity){
                    this.$message.warning('请选择城市')
                    return;
                  }else if (!addr.receiverDistrict){
                    this.$message.warning('请选择街区')
                    return;
                  }else if (!addr.receiverAddress){
                    this.$message.warning('请输入详细地址')
                    return;
                  }else if (!addr.receiverZip){
                    this.$message.warning('请输入邮编')
                    return;
                  }else if(addr.receiverMobile.length != 11 || isNaN(Number(addr.receiverMobile))){
                    this.$message.warning('请输入正确的电话号码')
                    return;
                  }else if(addr.receiverZip.length !=6){
                    this.$message.warning('请输入正确的邮编')
                    return;
                  }else{
                        let{
                             receiverName,
                             receiverMobile,
                             receiverProvince,
                             receiverCity,
                             receiverDistrict,
                             receiverAddress,
                             receiverZip
                         }=addr;
                         params = {
                             receiverName,
                             receiverMobile,
                             receiverProvince,
                             receiverCity,
                             receiverDistrict,
                             receiverAddress,
                             receiverZip
                         };
                  }
              }
              if(this.lock){
                  this.lock = false
                  this.axios[method](url,params,{timeout:2000}).then(()=>{
                      this.getAddrList()
         
                      this.lock =true
                  }).then(()=>{
                      this.close()
                      this.$message.success(message)
                
                  }).catch(()=>{
                      this.lock = true
                  })
              }
            
      },
      clickOption(action,item){
          this.userAction = action;
          if(action == '0'){
            this.modalTitle='新增地址'
            this.addrObj={}
            this.showModal = true;
          }
          else if (action == '1'){
            this.modalTitle = '编辑地址'
            // this.addrObj={...this.list[index]}
            //为什么要用浅拷贝？因为要避免修改modal内容的同时页面地址也在改动
            this.addrObj = Object.assign({},item) 
            this.showModal = true;
          }else{
            this.modalTitle='确定要删除该地址吗？'
            this.addrObj = Object.assign({},item) //可以不用浅拷贝
            this.showDelModal = true;
          } 

      },
      close(){
        this.showModal = false;
        this.showDelModal = false;

        this.addrObj = {}
      },
      orderSubmit(){
        // this.$router.push('/order/pay')
        let item = this.list[this.check];
        if(!item){
          this.$message.error('请选择一个收货地址')
          return;
        }
        this.axios.post('/orders',{
          shippingId:item.id
        }).then((res)=>{
          this.$router.push({
            path:'/order/pay',
            query:{
              orderNo:res.orderNo
            }
          })
        })
      }
      // warn(){
      //   this.warn = 'warn'
      // }
    },
    mounted(){
         this.getAddrList();
         this.getCartList();
    },
    beforeUpdate(){
      
    }

}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

    .order-confirm{

      .edit-wrap{
        
          .item{
            margin-bottom: 15px;
            .input{
                  display: inline-block;
                  width: 283px;
                  height: 40px;
                  line-height: 40px;
                  border: 1px solid #e5e5e5;
                  padding-left: 15px;
                  // letter-spacing: 0.5px;
            }
            .input+.input{
              margin-left: 14px;
            }
            select{
                  height: 40px;
                  line-height: 40px;
                  border: 1px solid #e5e5e5;
                  margin-right: 15px;
            }
            textarea{
                  height: 62px;
                  width: 100%;
                  padding: 13px 15px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  border: 1px solid #e5e5e5;
            }
          }
      }

      .wrapper{
              background-color: #f5f5f5;
              padding: 30px 0 84px;
      .container{
        .order-box{
          background-color: #fff;
          padding: 0 0 40px 40px;

          width: 100%;
          .item-address{
            padding-top: 38px;
            .addr-head{
                font-size: 20px;
                color: #333;
                font-weight: 200;
                margin-bottom: 21px;
            }
            .addr-list{
              display: flex;
              flex-wrap: wrap;
                .addr-info{
                    width: 271px;
                    height: 180px;
                    border: 1px solid #e5e5e5;
                    padding: 15px 24px;
                    font-size: 14px;
                    color: #757575;
                    box-sizing: border-box;
                    margin-right: 15px;
                    cursor: pointer;
                    h2{
                      height: 27px;
                      font-size: 18px;
                      font-weight: 400;
                      color: #333;
                      margin-bottom: 10px;
                      
                    }
                    .street{
                      height: 50px;
                    }
                    .action{
                      height: 50px;
                      line-height: 50px;
                      @include flex();
                      a{
                        svg{
                          width: 20px;
                          height: 20px;
                          fill: #666;
                          vertical-align: middle;
                          z-index: 10;
                          &:hover{
                            fill: $colorA;
                          }
                        }
                      }
                    }
                }
                .checked{
                  border-color: $colorA;
                }
                .addr-add{
                    width: 271px;
                    height: 180px;
                    border: 1px solid #e5e5e5;
                    padding: 15px 24px;
                    font-size: 14px;
                    color: #757575;
                    box-sizing: border-box;
                    margin-right: 15px;
                    text-align: center;
                    cursor: pointer;
                    .icon-add{
                      @include bgImg(30px,30px,'/imgs/icon-add.png',14px);
                      width: 30px;
                      height: 30px;
                      margin: 45px auto 10px;
                      background-color: #e0e0e0;
                      border-radius: 50%;
                    }
                 
                }
            }
            
            
          }
          .item-goods{
            margin-top: 34px;
            padding-bottom: 12px;
            border-bottom: 1px solid #e5e5e5;

            h2{
                border-bottom: 1px solid #e5e5e5;
                padding-bottom: 5px;
            }
            ul{

              li{
                font-size: 16px;
                color: #333;
                height: 40px;
                line-height: 40px;
                @include flex();
                margin-top: 10px;
                .good-name{
                  flex: 5;
                  img{
                    width: 30px;
                    height: 30px;
                    vertical-align: middle;
                    margin-right: 5px;
                  }
                }
                .good-price{
                  flex: 3;
                  text-align: center;
                }
                .good-total{
                  flex: 1;
                  color: $colorA;
                }
              }
            }
          }
          .item-shipping{
              margin-top: 31px;
              line-height: 20px;
              h2{
                  display: inline-block;
                  margin-right: 71px;
                  font-size: 20px;
                  width: 80px;
              }
              span{
                font-size: 16px;
                color: #ff6700;
                margin-right: 23px;
              }
          }
          .item-invoice{
               margin-top: 31px;
              line-height: 20px;
              h2{
                  display: inline-block;
                  margin-right: 71px;
                  font-size: 20px;
                  width: 80px;
              }
              a{
                font-size: 16px;
                color: #ff6700;
                margin-right: 23px;
              }
          }
          .detail{
            padding: 50px 44px 33px 0;
            border-bottom: 1px solid #f5f5f5;
            text-align: right;
            font-size: 16px;
            color: #666;
            .item,.item-total{
             
                .item-name{
                }
                .item-val{
                  display: inline-block;
                  width: 100px;
                  color: $colorA;
                }
            }
            .item{
                 line-height: 15px;
                margin-bottom: 12px;
            }
            .item-total{
              // line-height: none;
              .item-val{
                width: 200px;
                font-size: 28px;
              }
            }
         
          } 
          .btn-group{
            text-align: right;
            margin-top: 37px;
          }
        }
      }
    }
      }

</style>