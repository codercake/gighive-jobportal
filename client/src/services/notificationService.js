import axios from 'axios';

// Base URL for notifications-related API endpoints
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/notifications';

// Helper function to handle error response for Axios calls
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

// Get notifications from the server
const getNotifications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Mark notification as read
const markAsRead = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { read: true });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default {
  getNotifications,
  markAsRead
};
