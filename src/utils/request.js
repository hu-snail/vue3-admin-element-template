import axios from 'axios';
import { netConfig } from '@/config/net.config';
const { baseURL, contentType, invalidCode, noPermissionCode, requestTimeout, successCode } =
  netConfig;
import store from '@/store/index.js';
import router from '@/router/index.js';
import { ElMessageBox, ElMessage } from 'element-plus';

// eslint-disable-next-line no-unused-vars
let tokenLose = true;

/**
 *
 * @description 处理code异常
 * @param {*} code
 * @param {*} msg
 */
const handleCode = (code, msg) => {
  switch (code) {
    case invalidCode:
      tokenLose = false;
      ElMessageBox.confirm('您已掉线，或者访问权限出错，请重新登录！', '重新登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          // 处理重新登录逻辑
        })
        .catch(() => {
          tokenLose = true;
        });
      break;
    case noPermissionCode:
      router.push({ path: '/401' }).catch(() => {});
      break;
    default:
      ElMessage.error(msg || `后端接口${code}异常`, 'error');
      break;
  }
};

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
  },
});

instance.interceptors.request.use(
  (config) => {
    // 处理token header信息
    if (store.getters.token) {
      //   config.headers['Authorization'] = ''
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { data } = response;
    const { code, msg } = data;

    // 操作成功
    if (successCode.indexOf(code) !== -1) {
      return res;
    } else {
      handleCode(code, msg);
      return Promise.reject();
    }
  },
  (error) => {
    const { response, message } = error;
    if (error.response && error.response.data) {
      const { status, data } = response;
      handleCode(status, data.msg || message);
      return Promise.reject(error);
    } else {
      let { message } = error;
      if (message === 'Network Error') {
        message = '后端接口连接异常';
      }
      if (message.includes('timeout')) {
        message = '后端接口请求超时';
      }
      if (message.includes('Request failed with status code')) {
        const code = message.substr(message.length - 3);
        message = '后端接口' + code + '异常';
      }
      ElMessage.error(message || `后端接口未知异常`);
      return Promise.reject(error);
    }
  }
);

export default instance;
