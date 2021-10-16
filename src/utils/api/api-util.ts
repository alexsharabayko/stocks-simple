import axios from 'axios';
import { clearKeys } from '../clear-keys/clear-keys-util';

const API_KEY = 'KGONOMYNYWXBYMGY';

export const stocksApi = axios.create();

stocksApi.interceptors.request.use(config => {
   return {
    ...config,
    url: `https://www.alphavantage.co/query?function=${config.url.toUpperCase()}`,
    params: {
      ...config.params,
      apikey: API_KEY,
    }
  };
});

stocksApi.interceptors.response.use(
  (res) => {
    return clearKeys(res);
  },
  err => Promise.reject(err),
);
