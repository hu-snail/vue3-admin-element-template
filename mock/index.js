const prefix = 'https://gitee.com/hu-snail/vue3-admin-element-template/raw/master/src/assets/';
const list = [
  {
    title: 'Nutui',
    desc: '京东风格的轻量级移动端 Vue 组件库',
    url: 'https://nutui.jd.com/#/range',
    logo: 'index/nutui.png',
  },
  {
    title: 'Vant',
    desc: '轻量、可靠的移动端 Vue 组件库',
    url: 'https://vant-contrib.gitee.io/vant/v3/#/zh-CN',
    logo: 'index/vant.png',
  },
  {
    title: 'Ant Design',
    desc: '为 Web 应用提供了丰富的基础 UI 组件',
    url: 'https://antdv.com/docs/vue/introduce-cn/',
    logo: 'index/antd.svg',
  },
  {
    title: 'Vite 中文',
    desc: '下一代前端开发与构建工具',
    url: 'https://cn.vitejs.dev/',
    logo: 'index/vite.svg',
  },
  {
    title: 'Vue3 文档',
    desc: '渐进式JavaScript框架vue3中文文档',
    url: 'https://vue3js.cn/docs/zh/',
    logo: 'logo.png',
  },
  {
    title: 'ElementPlus',
    desc: '一套基于 Vue 3.0 的桌面端组件库',
    url: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
    logo: 'index/element+.svg',
  },
  {
    title: 'Iconpark',
    desc: '2400+基础图标，29种图标分类，提供更多的选择',
    url: 'https://iconpark.oceanengine.com/home',
    logo: 'index/iconpark.svg',
  },
  {
    title: 'Naiveui',
    desc: '一个 Vue 3 组件库，使用 TypeScript',
    url: 'https://www.naiveui.com/zh-CN/light',
    logo: 'index/naive.svg',
  },
  {
    title: 'Echarts5.0',
    desc: '一个基于 JavaScript 的开源可视化图表库',
    url: 'https://echarts.apache.org/zh/index.html',
    logo: 'index/echarts.png',
  },
  {
    title: 'XGplayer',
    desc: '带解析器、能节省流量的 Web 视频播放器',
    url: 'http://v2.h5player.bytedance.com/',
    logo: 'index/xgplayer.png',
  },
  {
    title: 'VueUse',
    desc: 'VUE组合实用程序的集合',
    url: 'https://vueuse.org/',
    logo: 'index/vueuse.svg',
  },
  {
    title: 'Vue3 源码',
    desc: '深入学习了解vue3源码',
    url: 'https://vue3js.cn/start/',
    logo: 'logo.png',
  },
];

const orderList = [
  {
    key: 'planned',
    value: 5021,
    status: 'primary',
  },
  {
    key: 'finished',
    value: 3204,
    status: 'success',
  },
  {
    key: 'unfinished',
    value: 1817,
    status: 'error',
  },
];

const skillList = [
  {
    title: 'JavaScript',
    percentage: 50,
    color: '#67c23a',
  },
  {
    title: 'HTML',
    percentage: 90,
    color: '#e6a23c',
  },
  {
    title: 'CSS',
    percentage: 70,
    color: '',
  },
  {
    title: 'Vue',
    percentage: 80,
    color: '#f56c6d',
  },
  {
    title: 'Node',
    percentage: 60,
    color: '#a650fe',
  },
];

export default [
  {
    url: '/api/getResouceList',
    type: 'get',
    response() {
      return { code: 200, msg: 'success', data: { list, prefix, orderList, skillList } };
    },
  },
];
