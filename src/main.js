import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
// import env from './env'

//mock 开关
const mock = false;
if (mock) {
  require('./mock/api');
}




//根据前端的跨域方式做调整 
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index' && /^(#\/product\/)/.test(path)==false) {
      console.log(path);
      console.log(/^#\/product\//.test(path));
      
      window.location.href = '/#/login';
    }
    return Promise.reject(res.msg);

  } else {
    Message.warning(res.msg)
    return Promise.reject(res.msg);  
  }
}, (error) => {
    let res = error.response
    Message.error(res.data.message)
    return Promise.reject(error); 
})

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  // loading:'/imgs/loading-svg/loading-bars.svg'
});

Vue.use(VueCookie)




const showMessage = Symbol('showMessage')
class DonMessage {
  success (options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning (options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info (options, single = true) {
    this[showMessage]('info', options, single)
  }
  error (options, single = true) {
    this[showMessage]('error', options, single)
  }

  [showMessage] (type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        Message[type](options)
      }
    } else {
      Message[type](options)
    }
  }
}
Vue.prototype.$message = new DonMessage()
// Vue.use(Message)
// Vue.prototype.$message = Message;
Vue.config.productionTip = false

router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
