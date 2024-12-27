import axios from 'axios';

// Define base URL for notifications API
const BASE_URL = `${process.env.REACT_APP_API_URL}/notifications`;

const handleAxiosError = (error) => {
  console.error(error.response ? error.response.data : error.message);
  throw error.response?.data || 'An error occurred';
};

// Get all notifications
export const getNotifications = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Mark a notification as read
export const markAsRead = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, { read: true });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export default {
  getNotifications,
  markAsRead
};
