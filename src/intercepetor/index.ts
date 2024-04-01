// 'use client'

import axios from 'axios';
import { AuthService } from '../services/AuthService';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    const access_token = localStorage.getItem('access_token');
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.data.message === 'Unauthorized') {
      AuthService.logout();
      window.location.href = '/login';
    }
    return Promise.reject(error.response);
  }
);

export default axiosApiInstance;
