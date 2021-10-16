import axios from 'axios';
import { clearKeys } from '../clear-keys/clear-keys-util';

const API_KEY = 'KGONOMYNYWXBYMGY';

export const stocksApi = axios.create();

/**
 * https://www.alphavantage.co doesn't support a classic REST methodology
 * It doesn't use paths for different methods, but a method is determined by `function` parameter
 * So this interceptor converts url of request to parameter `function` and then call it
 * Also it adds apikey as a header of a request
 */
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

/**
 * Some methods of https://www.alphavantage.co doesnt' return object in classical JSON style
 * Usually names of properties in JSON a written in `camelCase` ot `UPPER_WITH_UNDERSCORES` cases
 * Search method returns results with next names: { '1. description': '', '2. name': '' }
 * Stock details methods return response with props in `PascalCase`
 * So this interceptor removes all garbage and transform props to `camelCase` (if it's not in `UPPERCASE`)
 * Example: { '22. name': 'name' } => { name: 'name' }
 * Example: { Name: 'name' } => { name: 'name' }
 */
stocksApi.interceptors.response.use(
  (res) => {
    return clearKeys(res);
  },
  err => Promise.reject(err),
);
