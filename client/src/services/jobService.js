import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/jobs';

export const getAllJobs = async (filters) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job ${id}:`, error);
    throw error;
  }
};

// Function to apply for a job (POST application data to API)
export const applyForJob = async (applicationData) => {
  try {
    const response = await axios.post(`${API_URL}/apply`, applicationData);
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error;
  }
};
