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
    meta: { title: '常用组件', icon: 'code' },
    children: [
      {
        path: '/iconPark',
        name: 'IconPark',
        component: () => import('@/views/icon/index.vue'),
        meta: {
          title: '图标库',
          icon: 'like',
        },
      },
      {
        path: '/editor',
        name: 'Editor',
        component: () => import('@/views/editor/index.vue'),
        meta: {
          title: '文本编辑器',
          icon: 'add-text',
        },
        children: [
          {
            path: '/wangEditor',
            name: 'Wang',
            component: () => import('@/views/editor/wang.vue'),
            meta: {
              title: '富文本',
            },
          },
          {
            path: '/chart/line',
            name: 'ChartLine',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: 'Markdown',
            },
          },
        ],
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: 'Echarts图表',
          icon: 'chart-line',
        },
        children: [
          {
            path: '/chart/line',
            name: 'ChartLine',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: '折线图',
            },
          },
          {
            path: '/chart/line',
            name: 'ChartLine',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: '条形图',
            },
          },
        ],
      },
      {
        path: '/play/video',
        name: 'PlayVideo',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '视频播放器',
          icon: 'xigua',
        },
      },
      {
        path: '/play/video',
        name: 'PlayVideo',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '音频播放器',
          icon: 'performance',
        },
      },
      {
        path: '/img',
        name: 'PlayVideo',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '图片相关',
          icon: 'pic',
        },
        children: [
          {
            path: '/play/video',
            name: 'PlayVideo',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: '预览',
              icon: 'search',
            },
          },
          {
            path: '/play/video',
            name: 'PlayVideo',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: '裁剪',
              icon: 'tailoring',
            },
          },
          {
            path: '/play/video',
            name: 'PlayVideo',
            component: () => import('@/views/video/index.vue'),
            meta: {
              title: '编辑',
              icon: 'tailoring-two',
            },
          },
        ],
      },
      {
        path: '/play/video',
        name: 'PlayVideo',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '拖拽',
          icon: 'move-one',
        },
      },
      {
        path: '/play/video',
        name: 'PlayVideo',
        component: () => import('@/views/video/index.vue'),
        meta: {
          title: '二维码',
          icon: 'scan-code',
        },
      },
    ],
  },
  {
    path: '/play/video',
    name: 'PlayVideo',
    component: () => import('@/views/video/index.vue'),
    meta: {
      title: '404',
      icon: 'scan-code',
    },
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
