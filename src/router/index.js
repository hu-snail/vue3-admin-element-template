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
            path: '/vditor',
            name: 'Vditor',
            component: () => import('@/views/editor/vditor.vue'),
            meta: {
              title: 'Markdown',
            },
          },
        ],
      },
      {
        path: '/chart',
        name: 'Chart',
        component: () => import('@/views/echarts/index.vue'),
        meta: {
          title: 'Echarts图表',
          icon: 'chart-line',
        },
        children: [
          {
            path: '/chart/line',
            name: 'ChartLine',
            component: () => import('@/views/echarts/index.vue'),
            meta: {
              title: '折线图',
            },
          },
          {
            path: '/chart/line',
            name: 'ChartLine',
            component: () => import('@/views/echarts/index.vue'),
            meta: {
              title: '条形图',
            },
          },
        ],
      },
      {
        path: '/videoPlay',
        name: 'Video',
        component: () => import('@/views/videoPlay/index.vue'),
        meta: {
          title: '视频播放器',
          icon: 'xigua',
        },
      },
      {
        path: '/audioPlay',
        name: 'PlayAudio',
        component: () => import('@/views/audioPlay/index.vue'),
        meta: {
          title: '音频播放器',
          icon: 'performance',
        },
      },
      {
        path: '/img',
        name: 'Image',
        component: () => import('@/views/image/index.vue'),
        meta: {
          title: '图片相关',
          icon: 'pic',
        },
        children: [
          {
            path: '/imgPreview',
            name: 'ImgPreview',
            component: () => import('@/views/image/preview.vue'),
            meta: {
              title: '预览',
              icon: 'search',
            },
          },
          {
            path: '/imgCropper',
            name: 'ImgCropper',
            component: () => import('@/views/image/cropper.vue'),
            meta: {
              title: '裁剪',
              icon: 'tailoring',
            },
          },
          {
            path: '/play/video',
            name: 'PlayVideo',
            // component: () => import('@/views/video/index.vue'),
            meta: {
              title: '编辑',
              icon: 'tailoring-two',
            },
          },
        ],
      },
      {
        path: '/draggable',
        name: 'Draggable',
        component: () => import('@/views/draggable/index.vue'),
        meta: {
          title: '拖拽',
          icon: 'move-one',
        },
      },
      {
        path: '/qrcode',
        name: 'qrcode',
        component: () => import('@/views/qrcode/index.vue'),
        meta: {
          title: '二维码',
          icon: 'scan-code',
        },
      },
    ],
  },
  {
    path: '/errorPage',
    name: 'ErrorPage',
    component: Layout,
    meta: {
      title: '错误页面',
      icon: 'link-cloud-faild',
    },
    children: [
      {
        path: '/404Page',
        name: '404Page',
        component: () => import('@/views/errorPage/404.vue'),
        meta: {
          title: '404',
          icon: 'link-cloud-faild',
        },
      },
      {
        path: '/401Page',
        name: '401Page',
        component: () => import('@/views/errorPage/401.vue'),
        meta: {
          title: '401',
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
