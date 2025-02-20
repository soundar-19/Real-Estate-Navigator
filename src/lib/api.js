import axios from 'axios';

// Create axios instance with base URL from environment variables
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error statuses
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server errors
          break;
        default:
          // Handle other errors
          break;
      }
    }
    return Promise.reject(error);
  }
);

// Fetch unique property locations
const fetchLocations = async () => {
  try {
    const response = await api.get('/properties/locations');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Search properties with optional filters
const searchProperties = async (query, filters = {}) => {
  try {
    const response = await api.get('/properties/search', {
      params: {
        q: query,
        ...filters
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { api, fetchLocations, searchProperties };
