const data = [
  {
    path: '/',
    component: 'Layout',
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        // component: () => import('@/views/index/index.vue'),
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
    component: 'Layout',
    name: 'Comp',
    meta: { title: '组件', icon: '' },
    children: [
      {
        path: '/iconPark',
        name: 'IconPark',
        // component: () => import('@/views/iconPark/index.vue'),
        meta: {
          title: '图标',
        },
      },
    ],
  },
];
module.exports = [
  {
    url: 'api/menu/navigate',
    type: 'post',
    response() {
      return { code: 200, msg: 'success', data: data };
    },
  },
];
