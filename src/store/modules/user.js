const state = {
  userInfo: {},
  token: 'VUEX_TOKEN',
};

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
};

const actions = {
  setUserInfo: ({ commit }, userInfo) => {
    commit('SET_USERINFO', userInfo);
  },
};

export default {
  state,
  mutations,
  actions,
};
