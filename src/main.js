import Vue from 'vue'
import App from './App.vue' 
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css' 
// 引入路由 
import router from '@/router';
// //引入全局组件 
// import Navmenu from './pages/Home/Navmenu';

Vue.config.productionTip = false 

Vue.use(ElementUI); 
// //注册全局组件：（组件名称，哪一个组件）
// Vue.component(Navmenu.name,Navmenu); 

new Vue({
  render: h => h(App),  
  // 注册路由
  router,
}).$mount('#app')
