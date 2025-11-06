import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postRequirement = async (requirementData) => {
  const response = await api.post('/requirements', requirementData);
  return response.data;
};
