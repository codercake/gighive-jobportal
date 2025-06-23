import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getAllJobs = async (filters) => {
  const response = await api.get('/jobs', { params: filters });
  return response.data;
};

export const getJobById = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

export const applyForJob = async (formData) => {
  const response = await api.post('/jobs/apply', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};

export const searchJobs = async (searchTerm) => {
  const response = await api.get('/jobs/search', { params: { q: searchTerm }});
  return response.data;
};

export const getRecentJobs = async () => {
  const response = await api.get('/jobs/recent');
  return response.data;
};

export default {
  getAllJobs,
  getJobById,
  applyForJob,
  searchJobs,
  getRecentJobs
};

