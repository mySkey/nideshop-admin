import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/components/DashboardPage'),
            children: [
                {
                    path: '/',
                    name: 'welcome',
                    component: () => import('@/components/WelcomePage')
                },
                {
                    path: 'goods',
                    name: 'goods',
                    component: () => import('@/components/Goods/GoodsPage')
                },
                {
                    path: 'goods/add',
                    name: 'goods_add',
                    component: () => import('@/components/Goods/GoodsAddPage')
                },
                {
                    path: 'category',
                    name: 'category',
                    component: () => import('@/components/Category/CategoryPage')
                },
                {
                    path: 'category/add',
                    name: 'category_add',
                    component: () => import('@/components/Category/CategoryAddPage')
                },
                {
                    path: 'brand',
                    name: 'brand',
                    component: () => import('@/components/Brand/BrandPage')
                },
                {
                    path: 'brand/add',
                    name: 'brand_add',
                    component: () => import('@/components/Brand/BrandAddPage')
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('@/components/Order/OrderPage')
                },
                {
                    path: 'order/detail',
                    name: 'order_detail',
                    component: () => import('@/components/Order/OrderDetailPage')
                },
                {
                    path: 'operate/topic',
                    name: 'topic',
                    component: () => import('@/components/Topic/TopicPage')
                },
              {
                path: 'operate/topic/add',
                name: 'topic_add',
                component: () => import('@/components/Topic/TopicAddPage')
              },
              {
                path: 'user',
                name: 'user',
                component: () => import('@/components/User/UserPage')
              },
              {
                path: 'user/add',
                name: 'user_add',
                component: () => import('@/components/User/UserAddPage')
              },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/LoginPage')
        },
        {
            path: '*',
            redirect: '/dashboard'
        }
    ]
})
