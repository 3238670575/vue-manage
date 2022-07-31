import Vue from 'vue'
import App from './App.vue' 
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'  
import './assets/less/index.less'
// 引入路由 
import router from '@/router'; 
//引入仓库 
import store from '@/store' 
//引入axios 
import http from 'axios' 
//引入mock 
import './api/mock.js'


Vue.config.productionTip = false 

Vue.use(ElementUI);  
Vue.prototype.$http = http


new Vue({
  render: h => h(App),  
  // 注册路由
  router,  
  //注册仓库
  store,
}).$mount('#app')
