import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/UserLogin'
import UserDashboard from '@/components/UserDashboard'
import DesignerDashboard from '@/components/DesignerDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user-dashboard',
      name: 'UserDashboard',
      component: UserDashboard
    },
    {
      path: '/designer-dashboard',
      name: 'DesignerDashboard',
      component: DesignerDashboard
    }
  ]
})
