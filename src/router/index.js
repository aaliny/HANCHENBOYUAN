import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import CustIndex from '@/components/CustIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/custIndex/:id',
      name: 'CustIndex',
      component: CustIndex
    }
  ]
})
