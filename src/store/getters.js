const getters = {
  userInfo: (state) => state.user.userInfo,
  token: (state) => state.user.token,
  collapse: (state) => state.setting.collapse,
  fullScreen: (state) => state.setting.fullScreen,
};
export default getters;
