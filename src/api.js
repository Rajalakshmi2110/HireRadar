import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getJobs = async () => {
  const response = await api.get('/jobs');
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await api.post('/jobs', jobData);
  return response.data;
};