import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/pages/Login')
    },
    {
      path: '/workspaces',
      name: 'Workspaces',
      component: () => import('@/pages/Workspaces')
    },
    {
      path: '/workspaces/support',
      name: 'Support',
      component: () => import('@/pages/Support')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/pages/404')
    },
    {
      path: '/',
      name: 'Login',
      redirect: '/login'
    },
    {
      path: '/*',
      redirect: '/login'
    }
  ]
})
