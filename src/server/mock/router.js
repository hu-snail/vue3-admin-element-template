const data = [
  {
    path: '/',
    component: 'Layout',
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: '',
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
        component: '',
        meta: {
          title: '图标',
        },
        children: [
          {
            path: '/iconPark2',
            name: 'IconPark2',
            component: '',
            meta: {
              title: '图标2211',
            },
          },
        ],
      },
      {
        path: '/iconPark233',
        name: 'IconPark3',
        component: () => '',
        meta: {
          title: '图标2233',
        },
      },
      {
        path: '/iconPark234',
        name: 'IconPark3',
        component: () => '',
        meta: {
          title: '测试',
        },
      },
    ],
  },
];
export default [
  {
    url: '/api/menu/navigate',
    type: 'post',
    response() {
      return { code: 200, msg: 'success', data: data };
    },
  },
];
