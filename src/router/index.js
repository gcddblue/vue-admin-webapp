import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

import Layout from '@/layout'
import NavTest from './modules/nav-test'
import { Message } from 'element-ui'

/*
  hidden: if set hidden is true, that mean not show in sideBars
  meta: {
    title: xxx,  name for sideBars
    icon: xxx,   sideBars icon
    roles: xxx   premission control,if set 'admin',that mean all sideBar item show, else if do not set roles,that mean no premission for this item
  }
*/

/*通用routers*/
export const currencyRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
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
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Personal',
        component: () => import('@/views/personal'),
        meta: { title: '个人中心' }
      }
    ]
  },
  {
    path: '/driver',
    component: Layout,
    redirect: '/driver/index',
    children: [
      {
        path: 'index',
        name: 'Driver',
        component: () => import('@/views/driver-page'),
        meta: { title: '引导指南', icon: 'el-icon-s-flag' }
      }
    ]
  }
]
/*动态添加routers*/
export const asyncRoutes = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: '/permission/page-use',
    meta: {
      title: '权限许可',
      icon: 'el-icon-lock',
      roles: ['admin', 'user']
    },
    children: [
      {
        path: 'page-use',
        name: 'PageUser',
        component: () => import('@/views/permission/page-user'),
        meta: { title: '用户页面', icon: 'el-icon-user' }
      },
      {
        path: 'page-admin',
        name: 'PageAdmin',
        component: () => import('@/views/permission/page-admin'),
        meta: {
          title: '管理员页面',
          icon: 'el-icon-user-solid',
          roles: ['admin']
        }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/permission/roles'),
        meta: { title: '权限设置', icon: 'el-icon-s-tools', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/base-table',
    component: Layout,
    meta: {
      title: 'Table',
      icon: 'el-icon-table iconfont'
    },
    children: [
      {
        path: 'base-table',
        name: 'BaseTable',
        component: () => import('@/views/table/common-table'),
        meta: { title: '普通表格' }
      },
      {
        path: 'complex-table',
        name: 'ComplexTable',
        component: () => import('@/views/table/complex-table'),
        meta: { title: '复杂表格' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: '404',
    redirect: '/error/404',
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/error-page/404'),
        meta: { title: '404', icon: 'el-icon-s-release' }
      }
    ]
  },
  NavTest,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}

const router = creatRouter()

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}

// 导航守卫
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (store.getters.token) {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/_getInfo')
          const addRoutes = await store.dispatch(
            'permission/getAsyncRoutes',
            roles
          )
          router.addRoutes(addRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          Message.error(error)
        }
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
