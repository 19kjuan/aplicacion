import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.onrender.com' 
  : 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskAPI = {
  getAllTasks: () => api.get('/api/tasks'),
  getTask: (id) => api.get(`/api/tasks/${id}`),
  createTask: (taskData) => api.post('/api/tasks', taskData),
  updateTask: (id, taskData) => api.put(`/api/tasks/${id}`, taskData),
  deleteTask: (id) => api.delete(`/api/tasks/${id}`),
  healthCheck: () => api.get('/api/health'),
};

export default api;
