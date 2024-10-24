import axios from "axios";

const api = axios.create({
  baseURL: "https://incandescent-mousse-761677.netlify.app/api",
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default api;
