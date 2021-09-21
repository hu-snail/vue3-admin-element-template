import request from '@/utils/request.js';
export const getResouceList = () => {
  return request({
    url: '/getResouceList',
    method: 'get',
  });
};
