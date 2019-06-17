import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

Vue.use(Router)

import Layout from '@/layout'

/*通用routers*/
export const currencyRouters = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/page404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashboard'),
        meta: { title: '首页', icon: 'el-icon-s-data' }
      }
    ]
  }
]
/*动态添加routers*/
export const asyncRouters = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: '/permission/page-use',
    children: [
      {
        path: 'page-use',
        name: 'PageUser',
        component: () => import('@/views/premission/page-user'),
        meta: { title: '用户页面', icon: 'el-icon-user' }
      },
      {
        path: 'page-admin',
        name: 'PageAdmin',
        component: () => import('@/views/premission/page-admin'),
        meta: { title: '管理员页面', icon: 'el-icon-user-solid' }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/premission/roles'),
        meta: { title: '权限设置', icon: 'el-icon-s-tools' }
      }
    ]
  }
]
const router = new Router({
  routes: currencyRouters,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (Store.state.token) {
      const hasRoles = Store.state.roles.length > 0
      if (hasRoles) {
        next()
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
export default router
