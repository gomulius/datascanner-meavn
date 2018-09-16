import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Users/UserLogin'
import UserDashboard from '@/components/UserDashboard'
import DesignerDashboard from '@/components/DesignerDashboard'
import PasswordReset from '@/components/Users/PasswordReset'
import AddNewUser from '@/components/Users/AddNewUser'
import UserProfile from '@/components/Header/UserProfile'

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
    },
    {
      path: '/password-reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/add-new-user',
      name: 'AddNewUser',
      component: AddNewUser
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    }
  ]
})
