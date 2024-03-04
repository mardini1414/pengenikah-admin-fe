import axios from 'axios';
import config from '../config';

const token = localStorage.getItem('token');

const http = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Authorization: !!token && 'Bearer ' + token,
  },
});

http.interceptors.response.use(
  value => value,
  err => {
    console.log(err);
    // if (err.response.status === 401 && !err.response.data) {
    //   localStorage.clear();
    //   window.open('/login', '_self');
    // }
    return Promise.reject(err);
  }
);

export default http;
