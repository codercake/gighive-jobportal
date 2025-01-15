import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001',  
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true
});

export const jobService = {
  getAllJobs: async (filters) => {
    const response = await api.get('/jobs', { params: filters });
    return response.data;
  }
};
