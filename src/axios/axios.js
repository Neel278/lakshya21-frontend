import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://lakshya21.herokuapp.com/api',
  baseURL: 'https://lakshya2021.ga/api',
  // baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

export default instance;
