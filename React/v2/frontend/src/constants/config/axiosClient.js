import axios from 'axios';
import { API_URL } from './config';

const axiosClient = axios.create({
  baseURL: API_URL,
});

axiosClient.interceptors.request.use(async request => {
  const { method, url, data, keys } = request;
  const headers = {
    'Content-Type': 'application/json',
    // Agrega cualquier otro header que necesites
  };

  if (keys) {
    // Si necesitas agregar headers específicos según las keys
    // headers = getHeaders(keys);
  }

  request = {
    method,
    url,
    headers,
    data,
  };

  return request;
});

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default axiosClient
