import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layouts/index.vue';

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'home',
          affix: true,
          noKeepAlive: true,
        },
      },
      {
        path: '/iconPark',
        name: 'IconPark',
        component: () => import('views/iconPark/index.vue'),
        meta: {
          title: '图标',
        },
      },
    ],
  },
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({
    y: 0,
  }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export default router;
