import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layouts/index.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import('views/index/index.vue'),
          meta: {
            title: '首页',
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('views/login/index.vue'),
      meta: {
        title: '登录',
      },
    },
  ],
});

export default router;
