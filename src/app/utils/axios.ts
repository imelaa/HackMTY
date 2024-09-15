// utils/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.nessieisreal.com', // URL base correcta
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  config.params = {
    key: '433317e58b452df24cb017d8c6951112', // Reemplaza con tu clave de API
  };
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;

