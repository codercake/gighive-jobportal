import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const handleAxiosError = (error) => {
  if (error.response) {
    console.error('Error response:', error.response.data);
    console.error('Error status:', error.response.status);
    console.error('Error headers:', error.response.headers);
  } else if (error.request) {
    console.error('Error request:', error.request);
  } else {
    console.error('Error message:', error.message);
  }
  return Promise.reject(error.response?.data || 'An error occurred');
};

export { axiosInstance, handleAxiosError };
