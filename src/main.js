import { createApp } from 'vue';
// import elementPlus from './plugin/el-comp';
import iconPark from './plugin/icon-park';
import './config/permission';
import 'element-plus/lib/theme-chalk/display.css';
// import 'element-plus/packages/theme-chalk/src/base.scss';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';

import router from './router/index';
import store from '@/store';

const app = createApp(App);

app.use(router);
app.use(store);

// 注册 elementPlus组件/插件
// elementPlus(app);
// 完整引入
app.use(ElementPlus);
// 注册字节跳动图标
iconPark(app);

app.mount('#app');
