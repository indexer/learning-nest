// axios.service.ts
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.APININJA_URL
    });

    // Add request interceptor to set headers
    this.axiosInstance.interceptors.request.use((config) => {
      // Add your headers here
      config.headers['Content-Type'] = 'application/json'
      config.headers['X-Api-Key'] = process.env.APININJA;
      return config;
    });
  }

  getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
