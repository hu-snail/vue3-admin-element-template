export default [
  {
    url: '/api/getUers',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          userId: 'sdf2223',
          userName: '小胡',
        },
      };
    },
  },
];
