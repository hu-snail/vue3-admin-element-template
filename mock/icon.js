const icons = [
  {
    name: 'icon-home',
    title: '首页',
  },
  {
    name: 'add-text',
    title: '文字大小',
  },
  {
    name: 'code',
    title: '代码',
  },
  {
    name: 'like',
    title: '喜欢',
  },
  {
    name: 'chart-line',
    title: '折线图',
  },
  {
    name: 'xigua',
    title: '西瓜视频',
  },
  {
    name: 'performance',
    title: '演出',
  },
  {
    name: 'pic',
    title: '图片',
  },
  {
    name: 'search',
    title: '搜索',
  },
  {
    name: 'tailoring',
    title: '裁剪',
  },
  {
    name: 'tailoring-two',
    title: '裁剪',
  },
  {
    name: 'move-one',
    title: '拖拽',
  },
  {
    name: 'scan-code',
    title: '二维码',
  },
];

const props = [
  {
    param: 'theme',
    type: 'string',
    default: 'outline',
    all: 'outline,filled,two-tone,multi-color',
    desc: '主题，outline 线性 filled 填充 two-tone 双色 multi-color 多色 ',
  },
  {
    param: 'size',
    type: 'string | number',
    default: '24',
    all: '-',
    desc: '图标大小',
  },
  {
    param: 'fill',
    type: 'string | arrary',
    default: '#333',
    all: '-',
    desc: '图标颜色，双色 ["#333" ,"#2F88FF"] 多色 ["#333" ,"#2F88FF" ,"#FFF" ,"#305c69"]',
  },
  {
    param: 'strokeWidth',
    type: 'number',
    default: '4',
    all: '-',
    desc: '线段粗细',
  },
  {
    param: 'strokeLinejoin',
    type: 'string',
    default: '-',
    all: 'miter, bevel',
    desc: '拐点类型, 参考IconPark',
  },
  {
    param: 'strokeLinecap',
    type: 'string',
    default: '-',
    all: 'butt,square',
    desc: '端点类型 参考 IconPark',
  },
];
export default [
  {
    url: '/api/icon',
    type: 'get',
    response() {
      return { code: 200, msg: 'success', data: { icons, props } };
    },
  },
];
