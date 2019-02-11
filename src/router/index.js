import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: () => import('@/pages/Chat.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    }
  ],
  mode: 'history'
})
