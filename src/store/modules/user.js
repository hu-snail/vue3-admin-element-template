import { getUserInfo, login, logout } from '@/api/user';
import { getAccessToken, removeAccessToken, setAccessToken } from '@/utils/accessToken';

import { setting } from '@/config/setting';
const { title, tokenName } = setting;
import { resetRouter } from '@/router';

import { ElMessage, ElNotification } from 'element-plus';

const state = {
  accessToken: getAccessToken(),
  username: '',
  avatar: '',
  permissions: [],
};

const getters = {
  accessToken: (state) => state.accessToken,
  username: (state) => state.username,
  avatar: (state) => state.avatar,
  permissions: (state) => state.permissions,
};
const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
    setAccessToken(accessToken);
  },
  setUsername(state, username) {
    state.username = username;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
  setPermissions(state, permissions) {
    state.permissions = permissions;
  },
};
const actions = {
  setPermissions({ commit }, permissions) {
    commit('setPermissions', permissions);
  },
  async login({ commit }, userInfo) {
    const { data } = await login(userInfo);
    const accessToken = data[tokenName];
    if (accessToken) {
      commit('setAccessToken', accessToken);
      const hour = new Date().getHours();
      const thisTime =
        hour < 8
          ? '早上好'
          : hour <= 11
          ? '上午好'
          : hour <= 13
          ? '中午好'
          : hour < 18
          ? '下午好'
          : '晚上好';
      ElNotification({
        title: `${thisTime}！`,
        message: `欢迎登录${title}`,
        type: 'success',
      });
    } else {
      ElMessage.error(`登录接口异常，未正确返回${tokenName}...`);
    }
  },
  async getUserInfo({ commit, state }) {
    const { data } = await getUserInfo(state.accessToken);
    if (!data) {
      ElMessage.error('验证失败，请重新登录...');
      return false;
    }
    let { permissions, username, avatar } = data;
    if (permissions && username && Array.isArray(permissions)) {
      commit('setPermissions', permissions);
      commit('setUsername', username);
      commit('setAvatar', avatar);
      return permissions;
    } else {
      ElMessage.error('用户信息接口异常');
      return false;
    }
  },
  async logout({ dispatch }) {
    await logout(state.accessToken);
    await dispatch('resetAccessToken');
    await resetRouter();
  },
  resetAccessToken({ commit }) {
    commit('setPermissions', []);
    commit('setAccessToken', '');
    removeAccessToken();
  },
};
export default { state, getters, mutations, actions };
