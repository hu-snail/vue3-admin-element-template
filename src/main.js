import { createApp } from 'vue';

// permission 权限文件
import './config/permission';

// element
import 'element-plus/theme-chalk/display.css';
import App from './App.vue';
const app = createApp(App);

import { VueClipboard } from '@soerenmartius/vue3-clipboard';
app.use(VueClipboard);

// layout components
import layoutComp from './layouts/components/export';
layoutComp(app);

// router
import router from './router/index';
app.use(router);

// vuex
import store from '@/store';
app.use(store);

// 按需注册方式
// import elementPlus from './plugin/el-comp';
// 注册 elementPlus组件/插件
// elementPlus(app);
// // 完整引入

// 注册字节跳动图标
import iconPark from './plugin/icon-park';
iconPark(app);

import loadI18n from './plugin/i18n';
loadI18n(app);

app.mount('#app');
