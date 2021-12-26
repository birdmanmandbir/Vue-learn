import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from '../router/index'

Vue.use(VueRouter)

// 1.创建路由对象
const router = new VueRouter({
    // 2.添加路由配置，通过routes来添加路由配置
    routes
})
// 4.暴露
export default router