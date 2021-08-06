import { createStore } from 'vuex';
import getters from './getters.js';

// https://vitejs.dev/guide/features.html#glob-import
const modulesFiles = import.meta.globEager('./modules/*.js');

let modules = {};
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  modules[moduleName] = modulesFiles[path].default;
}

const store = new createStore({
  modules,
  getters,
});

export default store;
