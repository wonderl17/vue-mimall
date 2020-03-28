import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'



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
    alert(res.msg);
    return Promise.reject(res.msg);  
  }
})

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  // loading:'/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
