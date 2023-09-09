import {Keys} from '@constants/keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
const api = axios.create(baseConfig);

api.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem(Keys.token);
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  async function (error) {
    const originalRequest = error.config;
    originalRequest._retry = true;
    const token = await AsyncStorage.getItem(Keys.token);
    if (token === '') {
      return;
    }
    if (error?.response?.status === 401) {
      await AsyncStorage.clear();
    }
    Toast.show({
      type: 'error',
      text1: error?.data?.message ?? error?.message,
    });
    return Promise.reject(error);
  },
);

export default api;
