/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-28 17:18:24
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-20 15:18:01
 */

export default {
  route: {
    home: '首页',
    icons: '图标',
    components: '组件',
    eleComponents: 'Element 组件',
    charts: '图表',
    barChart: '柱状图表',
    lineChart: '折线图',
    mixedChart: '其他图表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小',
    profile: '个人中心',
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！',
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址',
  },
  permission: {
    createRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消',
  },
  guide: {
    description:
      '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导',
  },
  components: {
    documentation: '文档',
    tinymceTips:
      '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2:
      '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips:
      '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。',
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
  },
  example: {
    warning:
      '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见',
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description:
      '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍',
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)',
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)',
  },
  pdf: {
    tips: '这里使用 window.print() 来实现下载pdf的功能',
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。',
    loading: '主题正在努力重置...',
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有',
  },
  settings: {
    title: '主题设置',
    layout: '布局',
    theme: '主题',
    menuBg: '菜单背景',
    logo: 'Logo',
    tag: '标签',
    breadcurmb: '面包导航',
    fixed: '固定 Header',
    fullscreen: '全屏',
    refresh: '刷新',
    notice: '通知',
  },
  sayHi: {
    early: '早上好',
    morning: '上午好',
    noon: '中午好',
    afternoon: '下午好',
    evening: '晚上好',
  },
  indexPage: {
    descTitle: '开始您一天的工作吧！',
    resourceTitle: 'Vue3相关资源推荐',
    orderTitle: '订单清单',
    order: {
      planned: '计划订单',
      finished: '已完成订单',
      unfinished: '未完成订单',
    },
    skillTitle: '技能列表',
    envTitle: '生产环境依赖信息',
    chartTitle: '基础平滑折线图',
  },
};
