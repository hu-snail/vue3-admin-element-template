import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('views/index/index.vue'),
      meta: {
        title: '首页',
      },
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
