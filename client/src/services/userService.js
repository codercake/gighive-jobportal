import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/users';

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
  return Promise.reject(error.response?.data || 'An error occurred');
};

const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, userData, {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    });
    return response.data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const getUserApplications = async () => {
  const token = localStorage.getItem('token'); 

  try {
      const response = await axios.get('http://localhost:5000/users/applications', {
          headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; 
  } catch (error) {
      console.error('Error fetching applications:', error);
      return handleAxiosError(error);
  }
};
