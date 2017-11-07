import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import About from '@/page/About'
import Shop from '@/page/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
