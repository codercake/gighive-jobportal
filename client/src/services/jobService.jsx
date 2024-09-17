import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/jobs';

const getJobs = async (filters) => {
  const response = await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filters),
  });
  return response.json();
};

const getAllJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const createJob = async (jobData) => {
  try {
    const response = await axios.post(API_URL, jobData);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const updateJob = async (id, jobData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, jobData);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const deleteJob = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    handleAxiosError(error);
  }
};

// Define the error handler function
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
};

export default {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
