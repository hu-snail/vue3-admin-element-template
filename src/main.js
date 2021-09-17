import { createApp } from 'vue';

// permission 权限文件
import './config/permission';

// element
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/display.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// element theme change
import './styles/element-variables.scss';

import App from './App.vue';
const app = createApp(App);

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

// 完整引入
app.use(ElementPlus, {
  locale: zhCn,
});

// 注册字节跳动图标
import iconPark from './plugin/icon-park';
iconPark(app);

app.mount('#app');
