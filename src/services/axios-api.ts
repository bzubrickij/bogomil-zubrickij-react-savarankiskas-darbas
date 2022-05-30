import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default ApiService;
