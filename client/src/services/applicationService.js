import axios from 'axios';

export const getUserApplications = async () => {
  try {
    const response = await axios.get('/api/applications'); 
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user applications:', error);
    throw error;
  }
};
