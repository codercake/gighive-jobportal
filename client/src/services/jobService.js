import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/jobs';

const getAllJobs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getJobById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getAllJobs,
  getJobById,
};
