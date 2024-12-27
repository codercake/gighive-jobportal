import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/users';

const getAuthToken = () => {
  return localStorage.getItem('token');  // Fetch the token from localStorage
};

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

// Get applications of the logged-in user
export const getUserApplications = async () => {
  try {
    const response = await axios.get('http://localhost:5000/applications', {
      headers: { Authorization: `Bearer ${getAuthToken()}` }  
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user applications:", error);
    throw error;
  }
};
