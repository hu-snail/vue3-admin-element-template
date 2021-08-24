/**
 * @description 主题全局配置状态
 * @author hu-snail 1217437592@qq.com
 */
const state = {
  routerView: true, // 是否显示路由
  collapse: false, // 菜单是否展开
  fullScreen: false, // 是否全屏
};

const getters = {
  routerView: (state) => state.routerView,
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
};

export default {
  getters,
  state,
  mutations,
  actions,
};
