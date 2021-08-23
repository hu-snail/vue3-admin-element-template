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
        component: () => import('../views/index/index.vue'),
        meta: {
          title: '首页',
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
    meta: { title: '组件', icon: '' },
    children: [
      {
        path: '/iconPark',
        name: 'IconPark',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标',
        },
        children: [
          {
            path: '/iconPark2',
            name: 'IconPark2',
            component: () => import('@/views/iconPark/index.vue'),
            meta: {
              title: '图标2211',
            },
          },
          {
            path: '/iconPark236',
            name: 'IconParkw2',
            component: '',
            meta: {
              title: '图标2211',
            },
          },
        ],
      },
      {
        path: '/iconPark235',
        name: 'IconPark32',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标22',
        },
      },
      {
        path: '/iconPark23223',
        name: 'iconPark2323',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标2233',
        },
      },
      {
        path: '/iconPark2323',
        name: 'IconPark233',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标2233333',
        },
      },
      {
        path: '/iconPark23443',
        name: 'IconPark443',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223www3',
        },
      },
      {
        path: '/iconPark234243',
        name: 'IconPark443',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223www3',
        },
      },
      {
        path: '/iconPark234433',
        name: 'IconPark435543',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223www3',
        },
      },
      {
        path: '/iconPark233443',
        name: 'IconPark44543',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223www3',
        },
      },
      {
        path: '/iconPark233433343',
        name: 'IconPark44333543',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223www3',
        },
      },
      {
        path: '/iconPark233433333343',
        name: '33333',
        component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标223w3ww3',
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
