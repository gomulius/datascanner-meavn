import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/UserLogin'
import UserDasboard from '@/components/UserDashboard'
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
      path: '/user-dasboard',
      name: 'UserDasboard',
      component: UserDasboard
    },
    {
      path: '/designer-dashboard',
      name: 'DesignerDashboard',
      component: DesignerDashboard
    }
  ]
})
