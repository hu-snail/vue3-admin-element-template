import request from '@/utils/request.js';
export const getIcons = () => {
  return request({
    url: '/icon',
    method: 'get',
  });
};
