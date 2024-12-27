import axios from 'axios';

// Base URL for user-related API endpoints
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/users';

// Helper function to get authentication token
const getAuthToken = () => {
  return localStorage.getItem('token');  // Fetch the token from localStorage
};

// Fetch user profile from the API
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Fetch applications of the logged-in user
export const getUserApplications = async () => {
  try {
    const response = await axios.get(`${API_URL}/applications`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` }  
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user applications:", error);
    throw error;
  }
};

export default {
  getUserProfile,
  getUserApplications
};
