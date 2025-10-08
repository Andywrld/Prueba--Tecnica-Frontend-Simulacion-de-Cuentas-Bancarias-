import axios from 'axios';

const API_BASE_URL = 'https://68e5429021dd31f22cc12cee.mockapi.io/api';

export const AxiosIntance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
