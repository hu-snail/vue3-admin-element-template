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
    component: () => import('@/views/errorPage/401.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPage/404.vue'),
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
        component: () => import('../views/index/index.vue'),
        meta: {
          title: 'home',
          icon: 'home',
          affix: true,
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/comp',
    component: Layout,
    name: 'Comp',
    meta: { title: 'components', icon: 'code' },
    children: [
      {
        path: '/element',
        name: 'ElementComp',
        component: () => import('@/views/element/index.vue'),
        meta: {
          title: 'eleComponents',
          icon: 'code',
        },
      },
      {
        path: '/iconPark',
        name: 'IconPark',
        component: () => import('@/views/icon/index.vue'),
        meta: {
          title: 'icons',
          icon: 'like',
        },
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/echarts/index.vue'),
        meta: {
          title: 'charts',
          icon: 'chart-line',
        },
        children: [
          {
            path: '/line',
            name: 'Line',
            component: () => import('@/views/echarts/line.vue'),
            meta: {
              title: 'lineChart',
            },
          },
          {
            path: '/bar',
            name: 'Bar',
            component: () => import('@/views/echarts/bar.vue'),
            meta: {
              title: 'barChart',
            },
          },
          {
            path: '/otherChart',
            name: 'OtherChart',
            component: () => import('@/views/echarts/other.vue'),
            meta: {
              title: 'mixedChart',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: Layout,
    meta: {
      title: 'errorPages',
      icon: 'link-cloud-faild',
    },
    children: [
      {
        path: '/404Page',
        name: '404Page',
        component: () => import('@/views/errorPage/404.vue'),
        meta: {
          title: 'page404',
          icon: 'link-cloud-faild',
        },
      },
      {
        path: '/401Page',
        name: '401Page',
        component: () => import('@/views/errorPage/401.vue'),
        meta: {
          title: 'page401',
          icon: 'link-interrupt',
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
