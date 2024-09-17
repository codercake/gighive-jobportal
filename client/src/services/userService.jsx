import axios from 'axios'; 

const API_URL = process.env.REACT_APP_API_URL + '/users';

const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, userData);
    return response.data;
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
  getUserProfile,
  updateUserProfile,
};
