## 建议开发环境
- `Node`: 版本建议 >= 12.0.0 [下载链接](https://nodejs.org/zh-cn/download/)
- `Git`: [版本管理工具](https://www.git-scm.com/download)
- `Visual Studio Code`: [最新版本](https://code.visualstudio.com/Download/)
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue开发必备
    - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)- 脚本代码检查
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
    - [Stylelin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css格式化

## 一.创建Vite2项目
> 官方文档：[vite2](https://cn.vitejs.dev/guide/why.html)，兼容性注意: `Vite` 需要 `Node.js` 版本 >= `12.0.0`。
```shell
npm init @vitejs/app #or  yarn create @vitejs/app
```
我们可以通过附加的命令行选项直接指定项目名称和你想要使用的模板，可以直接生成项目
```shell
# npm 6.x
npm init @vitejs/app my-vue-app --template vue

# npm 7+, 需要额外的双横线：
npm init @vitejs/app my-vue-app -- --template vue

# yarn
yarn create @vitejs/app my-vue-app --template vue
```

## 二.安装Element-plus
> 官方文档地址：[element-plus](https://element-plus.gitee.io/#/zh-CN) ，具体配置：[快速开始](https://element-plus.gitee.io/#/zh-CN/component/quickstart)
```shell
npm install element-plus -S #or yarn add element-plus -S
```
#### 完整引入
在`main.js`中写入
```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```
#### 按需加载
首先，安装 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import):
```shell
#npm
npm install vite-plugin-style-import -D
# yarn
yarn add vite-plugin-style-import -D
```
然后，将 `vite.config.js` 修改为：
引入 .scss 样式
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ]
})
```
在`main.js`引入所需的组件即可：
```js
import { createApp } from 'vue'
import { ElButton, ElSelect, ElRow, ElCol } from 'element-plus';
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import App from './App.vue';

const app = createApp(App)

app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);

app.mount('#app')
```
## 三.安装sass预编译
`Element-plus`样式基于`sass`开发的，所以建议选择安装sass保持一致
```shell
# npm
npm install sass -S
# or yarn
yarn add sass -S
```
在`src`目录下创建`styles`样式文件夹，存放样式文件，参考目录结构如下：
```
|-- src
    |-- styles
        |-- common.scss // 公共样式文件
        |-- variable.scss // 样式变量文件
        |-- index.scss // 导入合并文件
        |-- reset.scss // 重置浏览器默认样式文件
```
其中`index.scss`代码参考
```css
@import './common.scss';
@import './reset.scss';
@import './variable.scss';
```
#### scss文件全局引入
平常开发中会用到一些公共样式或者变量，使用时每个页面单独引入，会比较麻烦。使用如下方式可以解决此问题，还有其他方式，请自行查找
`vite.config.js`文件新增以下代码
```js
export default defineConfig({
   // ...
    css: {
        preprocessorOptions: {
        // 引入公用的样式
        scss: {
            // styles/index.scss  样式文件 在src目录下
            additionalData: `@use "@/styles/index.scss" as *;`
        }
        }
    }
}
```

##### 样式自动加前缀
安装`autoprefixer` 和 `postcss`
```shell
# npm 
npm install autoprefixer postcss -D
# yarn
yarn add autoprefixer postcss -D
```
然后创建`postcss.config.js`文件
```js
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```
修改`vite.config.js`代码
```js
// vite.config.js
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                require('autoprefixer')
            ]
        }
    }
})
````
## 四.代码规范EsLint
> 具体配置点击[详细配置文档地址](https://eslint.bootcss.com/)
> 我们借助eslint规范项目代码，方面多人开发，和阅读代码。首先安装相关依赖
```shell
 # npm
 npm install eslint babel-eslint eslint-plugin-prettier eslint-plugin-vue prettier @vue/eslint-config-prettier -D
 
 # yarn
 yarn add eslint babel-eslint eslint-plugin-prettier eslint-plugin-vue prettier @vue/eslint-config-prettier -D
```
然后在项目根目录下创建`.eslintrc.js`文件，内容如下：
```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80, // 每行代码长度（默认80）
        tabWidth: 2, // 每个tab相当于多少个空格（默认2）
        useTabs: false, // 是否使用tab进行缩进（默认false）
        semi: false, // 使用单引号（默认false）
        singleQuote: true, // 声明结尾使用分号(默认true)
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        trailingComma: 'es5', // 多行使用拖尾逗号（默认none）
        bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
        jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
        arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
        htmlWhitespaceSensitivity: 'ignore',
        vueIndentScriptAndStyle: true,
        endOfLine: 'lf',
      },
    ],
  },
}
```
如果某些文件不需要`eslint`校验,我们需要在根目录创建`.eslintignore`文件来忽略这些文件
```md
src/assets
src/icons
public
dist
node_modules
```

## 五.安装vue-router 4.x
```shell
# npm 
npm install vue-router@next -S
# or yarn
yarn add vue-router@next -S
```
在`src`目录下创建`src/router/index.js`路由配置文件
注意：需要引入完整的文件名（.vue），vite不建议忽略后缀名， `views`为别名配置，参考`vite-config.js`文件中别名配置
```js
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'Index',
        // 注意引入完整的文件名（.vue），vite不建议忽略后缀名
        component: () => import('views/index/index.vue'),
        meta: {
          title: '首页'
        }
      },
  ]
});

export default router
```

## 六.安装vuex4.x
```shell
# npm
npm install vuex@next -S
# or yarn
yarn add vuex@next -S
```
##### vuex工程化配置
首先在`src`目录下创建`store`文件夹，完整目录如下：
```
|-- src
    |-- store
        |-- modules // 模块文件夹
            |-- user.js // 用户模块
        |-- getters.js // getter 文件
        |-- index.js // vuex文件入口
```
使用案例
- `store/modules/user.js` 用户模块,定义`state`，`mutations`, `actions`
```js
  const state = {
    userInfo: {},
    token: 'VUEX_TOKEN'
  }
  
  const mutations = {
      SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo
      }
  }

  const actions = {
    setUserInfo: ({commit}, userInfo) => {
      commit('SET_USERINFO', userInfo)
    }
  }

  export default {
    state,
    mutations,
    actions
  }
```
- `store/getters.js`，需要全局的变量通过getter方式获取
```js
const getters = {
	userInfo: (state) => state.user.userInfo,
	token: (state) => state.user.token,
};
export default getters;
```
- `store/index.js`，vuex入口文件，通过`import.meta.globEager`获取`modules`下所有模块文件，无需每个文件单独导入
```js
import { createStore } from 'vuex'
import getters from './getters.js'

// https://vitejs.dev/guide/features.html#glob-import
const modulesFiles = import.meta.globEager('./modules/*.js')

let modules = {}
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}

const store = new createStore({
  modules,
  getters,
})

export default store
```
在`main.js`中使用
```js
import store from "@/store";
import App from './App.vue'
import store from "@/store";

const app = createApp(App)
app.use(store)
app.mount('#app')
```

## 七.安装axios
```shell
# npm
npm install axios -S
# yarn
yarn add axios -S
```
完成安装后，在`src`目录下创建`src/config/net.config.js `文件
```js
// net.config.js
/**
 * @description 配置axios请求基础信息
 * @author hu-snail 1217437592@qq.com
 */

export default {
  // axios 基础url地址
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://xxx/api'
      : 'https://xxx/api',
  // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用
  cors: true,
  // 根据后端定义配置
  contentType: 'application/json;charset=UTF-8',
  //消息框消失时间
  messageDuration: 3000,
  //最长请求时间
  requestTimeout: 10000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: -1,
  //无权限code
  noPermissionCode: -1,
}
```
##### axios封装处理
```js
import Vue from 'vue'
import axios from 'axios'
import {
  baseURL,
  contentType,
  invalidCode,
  noPermissionCode,
  requestTimeout,
  successCode,
  invalidCode,
} from '@/config/index.js'

import store from '@/store'
import router from '@/router'
import { ElMessageBox, ElMessage } from 'element-plus'

let tokenLose = true

/**
 *
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    case invalidCode:
      tokenLose = false
      ElMessageBox.confirm(
        '您已掉线，或者访问权限出错，请重新登录！',
        '重新登录',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async () => {
            // 处理重新登录逻辑
        })
        .catch(() => {
          tokenLose = true
        })
      break
    case noPermissionCode:
      router.push({ path: '/401' }).catch(() => {})
      break
    default:
      Vue.prototype.$baseMessage(msg || `后端接口${code}异常`, 'error')
      break
  }
}

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
})


instance.interceptors.request.use(
  (config) => {
    // 处理token header信息
    if (store.getters.token) {
    //   config.headers['Authorization'] = ''
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const res = response.data
    const { data } = response
    const { code, msg } = data
    
    // 操作成功
    if (successCode.indexOf(code) !== -1) {
        return res
    } else {
        handleCode(code, msg)
        return Promise.reject(error)
    }
  },
  (error) => {
    const { response, message } = error
    if (error.response && error.response.data) {
        const { status, data } = response
        handleCode(status, data.msg || message)
        return Promise.reject(error)
      } else {
        let { message } = error
        if (message === 'Network Error') {
          message = '后端接口连接异常'
        }
        if (message.includes('timeout')) {
          message = '后端接口请求超时'
        }
        if (message.includes('Request failed with status code')) {
          const code = message.substr(message.length - 3)
          message = '后端接口' + code + '异常'
        }
        ElMessage(message || `后端接口未知异常`, 'error')
        return Promise.reject(error)
      }
  }
)

export default instance
```

## 八.vite打包问题
- vite打包之后页面空白页解决方案
```js
// vite.config.js
export default defineConfig({
  base: './',
})
```
- vite打包之后访问资源跨域解决方案
> Vite 本身依赖于 ESModule 来做模块加载，而 ESModule 是不支持 file:// 本地访问的（事实上在生产环境中压根也没这种需求）。

想要本地访问，安装`serve`
```shell
# npm
npm i serve -g
# yarn 
yarn add serve -g
```
然后进入到打包文件（如：`dist`）根目录执行 `serve`命令，快速启动web服务就可以访问了
```shell
Serving!
Local:  http://localhost:54698 
```
或者先执行`npm run build`，再执行`npm run preview`
```json
// package.json
[
  "scripts": {
    "build": "vite build --mode production",
    "preview": "vite preview"
  },
]
```

