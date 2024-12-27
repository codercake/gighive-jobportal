import axios from 'axios';

// Define base URL for jobs API
const BASE_URL = `${process.env.REACT_APP_API_URL}/jobs`;

// Fetch all jobs with filters
export const getAllJobs = async (filters) => {
  try {
    const response = await axios.get(BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Fetch a specific job by ID
export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
};

// Apply for a job
export const applyForJob = async (applicationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/apply`, applicationData);
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
