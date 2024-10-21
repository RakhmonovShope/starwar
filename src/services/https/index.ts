import axios, { AxiosInstance } from 'axios';
import config from '../../config.ts';

class Http {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.axios.headers,
      timeout: config.axios.timeout,
    });
  }

  public get request(): AxiosInstance {
    return this.instance;
  }
}

export default new Http();
