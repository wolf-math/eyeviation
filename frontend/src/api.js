import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const api = axios.create({
  // URL of the backend
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
  (config) => {
    // check if there's an access token in local stoage
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
