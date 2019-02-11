import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import('@/pages/Chat.vue')
    }
  ],
  mode: 'history'
})
