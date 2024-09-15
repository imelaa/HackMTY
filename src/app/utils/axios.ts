import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://api.nessieisreal.com', // URL base predeterminada para pruebas
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  // Añade la clave de API a los parámetros de la solicitud para pruebas
  config.params = {
    key: process.env.NEXT_PUBLIC_API_KEY || '433317e58b452df24cb017d8c6951112', // Clave de API predeterminada para pruebas
  };
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;
