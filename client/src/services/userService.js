import axios from 'axios';

// Define base URL for user API endpoints
const BASE_URL = `${process.env.REACT_APP_API_URL}/users`;

// Helper to get the token
const getAuthToken = () => localStorage.getItem('token');

// Fetch user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Fetch applications
export const getUserApplications = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/applications`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user applications:', error);
    throw error;
  }
};

export default {
  getUserProfile,
  getUserApplications
};
