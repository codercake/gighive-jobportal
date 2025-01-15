import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllJobs = async (filters) => {
  try {
    const response = await axios.get(`${API_URL}/jobs`, { params: filters });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch jobs');
  }
};

export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch job details');
  }
};

export const applyForJob = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/jobs/apply`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit application');
  }
};
