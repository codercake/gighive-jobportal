import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/notifications';

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

const getNotifications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

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
  markAsRead,
};
