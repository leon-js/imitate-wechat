import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
      //路由懒加载（解决vue项目首次加载慢）
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
  ]
})
