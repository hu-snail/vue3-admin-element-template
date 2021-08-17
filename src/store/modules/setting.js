/**
 * @description 主题全局配置状态
 * @author hu-snail 1217437592@qq.com
 */
const state = {
  collapse: false, // 菜单是否展开
  fullScreen: false, // 是否全屏
};

const mutations = {
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  CHANGE_FULL_SCREEN: (state, fullScreen) => {
    state.fullScreen = fullScreen;
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
};

export default {
  state,
  mutations,
  actions,
};
