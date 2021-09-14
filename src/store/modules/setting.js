/**
 * @description 主题全局配置状态
 * @author hu-snail 1217437592@qq.com
 */
const state = {
  routerView: true, // 是否显示路由
  collapse: false, // 菜单是否展开
  fullScreen: false, // 是否全屏
  isMobile: false, // 是否为移动端
  isDrawer: false, // 是否展开移动端菜单
  theme: 'default', // 主题色
  isDrawerSetting: false, // 是否打开主题设置
};

const getters = {
  routerView: (state) => state.routerView,
  isMobile: (state) => state.isMobile,
  isDrawer: (state) => state.isDrawer,
  theme: (state) => state.theme,
  isDrawerSetting: (state) => state.isDrawerSetting,
};

const mutations = {
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  CHANGE_FULL_SCREEN: (state, fullScreen) => {
    state.fullScreen = fullScreen;
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
  changeFullScreen: ({ commit }, fullScreen) => {
    commit('CHANGE_FULL_SCREEN', fullScreen);
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
  changeDrawer: ({ commit }, flag) => {
    commit('CHANGE_IS_DRAWER', flag);
  },
  setTheme: ({ commit }, theme) => {
    commit('SET_THEME', theme);
  },
  setSettingDrawer: ({ commit }, flag) => {
    commit('CHANGE_SETTING_DRAWER', flag);
  },
};

export default {
  getters,
  state,
  mutations,
  actions,
};
