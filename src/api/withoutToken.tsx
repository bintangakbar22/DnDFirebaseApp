import axios from 'axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const baseConfig = {
  baseURL: 'https://take-home-test-api.nutech-integrasi.app',
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  },
  timeout: 25000,
};
const apiWithOutToken = axios.create(baseConfig);

apiWithOutToken.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    Toast.show({
      type: 'error',
      text1: error?.data?.message ?? error?.message,
    });
    return Promise.reject(error);
  },
);

export default apiWithOutToken;
