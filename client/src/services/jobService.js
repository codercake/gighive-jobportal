import axios from 'axios';

// Load the API base URL from environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Function to fetch all jobs with filters
export const getAllJobs = async (filters) => {
  try {
    const response = await axios.get(`${API_URL}/jobs`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Function to fetch job by ID
export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
};

// Function to apply for a job (POST application data to API)
export const applyForJob = async (applicationData) => {
  try {
    const response = await axios.post(`${API_URL}/jobs/apply`, applicationData);
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error;
  }
};

export default {
  getAllJobs,
  getJobById,
  applyForJob
};
