import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://lakshya21.herokuapp.com/api',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

export default instance;
