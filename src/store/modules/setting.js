/**
 * @description 主题全局配置状态
 * @author hu-snail 1217437592@qq.com
 */

import { themeConfig } from '@/config/theme';
const {
  mode,
  theme,
  fixedHead,
  fullScreen,
  refresh,
  collapse,
  notice,
  isBreadcrumb,
  isLogo,
  tag,
  menuBgColor,
} = themeConfig;
const state = {
  routerView: true, // 是否显示路由
  isDrawerSetting: false, // 是否打开主题设置
  isMobile: false, // 是否为移动端
  isDrawer: false, // 是否展开移动端菜单
  isFullScreen: false, // 是否显示全屏
  collapse,
  fullScreen,
  refresh,
  mode,
  theme,
  fixedHead,
  notice,
  isBreadcrumb,
  isLogo,
  tag,
  menuBgColor,
};

const getters = {
  routerView: (state) => state.routerView,
  isMobile: (state) => state.isMobile,
  isDrawer: (state) => state.isDrawer,
  isFullScreen: (state) => state.isFullScreen,
  theme: (state) => state.theme,
  isDrawerSetting: (state) => state.isDrawerSetting,
  fullScreen: (state) => state.fullScreen,
  refresh: (state) => state.refresh,
  fixedHead: (state) => state.fixedHead,
  notice: (state) => state.notice,
  isBreadcrumb: (state) => state.isBreadcrumb,
  isLogo: (state) => state.isLogo,
  tag: (state) => state.tag,
  menuBgColor: (state) => state.menuBgColor,
  mode: (state) => state.mode,
  settings: (state) => state,
};

const mutations = {
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  CHANGE_FULL_SCREEN: (state, flag) => {
    console.log(flag);
    state.isFullScreen = flag;
  },
  SET_ROUTER_VIEW: (state) => {
    state.routerView = !state.routerView;
  },
  CHANGE_IS_MOBILE: (state, flag) => {
    state.isMobile = flag;
  },
  CHANGE_IS_DRAWER: (state, flag) => {
    state.isDrawer = flag;
  },
  SET_THEME: (state, theme) => {
    state.theme = theme;
  },
  CHANGE_SETTING_DRAWER: (state, flag) => {
    state.isDrawerSetting = flag;
  },
  CHANGE_BREADCRUMB: (state, flag) => {
    state.isBreadcrumb = flag;
  },
  CHANGE_TAG: (state, flag) => {
    state.tag = flag;
  },
  CHANE_MODE: (state, mode) => {
    state.mode = mode;
  },
  SET_SETTING_OPTIONS: (state, options) => {
    Object.assign(state, { ...options });
  },
};

const actions = {
  /**
   * @description 切换展开收起
   */
  changeCollapse: ({ commit }) => {
    commit('CHANGE_COLLAPSE');
  },
  /**
   * @description 切换是否全屏
   */
  changeFullScreen: ({ commit }, flag) => {
    commit('CHANGE_FULL_SCREEN', flag);
  },
  /**
   * @description 是否刷新路由
   */
  setRouterView: ({ commit }, flag) => {
    commit('SET_ROUTER_VIEW', flag);
  },
  /**
   * @description 是否为移动端
   */
  changeMobile: ({ commit }, flag) => {
    commit('CHANGE_IS_MOBILE', flag);
  },
  /**
   * @description 是否展开移动端菜单
   */
  changeDrawer: ({ commit }, flag) => {
    commit('CHANGE_IS_DRAWER', flag);
  },
  /**
   * @description 设置主题
   */
  setTheme: ({ commit }, theme) => {
    commit('SET_THEME', theme);
  },

  /**
   * @description 是否打开主题设置
   */
  setSettingDrawer: ({ commit }, flag) => {
    commit('CHANGE_SETTING_DRAWER', flag);
  },
  /**
   * @description 是否显示面包导航
   */
  setBreadcrumb: ({ commit }, flag) => {
    commit('CHANGE_BREADCRUMB', flag);
  },
  /**
   * @description 是否显示标签
   */
  setTag: ({ commit }, flag) => {
    commit('CHANGE_TAG', flag);
  },

  /**
   * @description 切换主题
   */
  setMode: ({ commit }, mode) => {
    commit('CHANE_MODE', mode);
  },

  /**
   * @description 设置主题配置
   */
  setSettingOptions: ({ commit }, options) => {
    commit('SET_SETTING_OPTIONS', options.value);
  },
};

export default {
  getters,
  state,
  mutations,
  actions,
};
