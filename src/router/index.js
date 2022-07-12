//配置路由 
import VueRouter from "vue-router" 
import Vue from 'vue' 
 
//使用路由插件 
Vue.use(VueRouter) 
 
//引入路由组件 
import Home from '@/pages/Home'

// 配置路由 
export default new VueRouter({ 
    routes:[ 
        { 
            path:'/home', 
            component:Home,
        }, 
        { 
            //重定向，初始界面 
            path:'*', 
            redirect:"/home"
        } 

    ]
})