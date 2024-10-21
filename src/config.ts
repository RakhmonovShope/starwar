// import * as process from 'node:process';

export default {
  baseUrl: 'https://sw-api.starnavi.io',
  axios: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 10000,
  },
};
