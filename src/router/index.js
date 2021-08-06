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
  ],
});

export default router;
