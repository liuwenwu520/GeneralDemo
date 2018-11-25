import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/index/Index'
import SingIn from '@/sign-in/SignIn'
import Manage from '@/manage/Manage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SingIn
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
