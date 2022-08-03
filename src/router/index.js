//配置路由
import VueRouter from "vue-router";
import Vue from "vue";

//使用路由插件
Vue.use(VueRouter);

//引入路由组件
import Home from "@/pages/Home";
import Mains from "@/pages/Mains"; 


// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/mains",
      name: 'Mains',
      component: Mains,
      redirect: '/home',
    //   路由嵌套
      children: [
        // {
        //   path: "/home",
        //   name:'home',
        //   component: Home,
        // },  
        // {
        //   path: "/user",
        //   name:'user',
        //   component: ()=>import('../pages/User'),
        // }, 
        // { 
        //   path:'/mall', 
        //   name:'mall', 
        //   component:()=>import('../pages/Mall')
        // }, 
        // { 
        //   path:'/page1', 
        //   name:'page1', 
        //   component:()=>import('../pages/Other/pageone.vue')
        // }, 
        // { 
        //   path:'/page2', 
        //   name:'page2', 
        //   component:()=>import('../pages/Other/pagetwo.vue')
        // },
      ],
    },
    { 
      path:'/login', 
      name:'login', 
      component:()=>import('../pages/Login/index.vue')
    },
    {
      //重定向，初始界面
      path: "*",
      redirect: "/login",
    },
  ],
});
