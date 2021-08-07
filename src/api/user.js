import request from '@/utils/request.js';

export const getUser = () => {
  return request({ url: '/getUers', method: 'get' });
};
