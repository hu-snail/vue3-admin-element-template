import request from '@/utils/request.js';
import { setting } from '@/config/setting';
const { tokenName } = setting;
export const login = async (data) => {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
};

export const getUserInfo = (accessToken) => {
  return request({
    url: '/userInfo',
    method: 'get',
    data: {
      [tokenName]: accessToken,
    },
  });
};

export const logout = () => {
  return request({
    url: '/logout',
    method: 'post',
  });
};

export const register = async () => {
  return request({
    url: '/register',
    method: 'post',
  });
};
