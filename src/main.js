import { createApp } from 'vue';
import { ElButton, ElSelect, ElRow, ElCol } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';

import './plugin/index.js';

import router from './router/index';
import store from '@/store';

const app = createApp(App);

app.use(router);
app.use(store);

app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);

app.mount('#app');
