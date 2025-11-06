import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postRequirement = async (requirementData) => {
  const response = await api.post('/requirements', requirementData);
  return response.data;
};
