import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const login = (email: string, password: string) => api.post('/users/login', { email, password });
export const register = (name: string, email: string, password: string) => api.post('/users/register', { name, email, password });
export const getSpecialists = () => api.get('/specialists');
export const getExercises = () => api.get('/exercises');
export const addExercise = (name: string, duration: number) => api.post('/exercises', { name, duration });

export default api;