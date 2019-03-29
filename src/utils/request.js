import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://demo-nodejs-reactjs.herokuapp.com/api/v1' : 'http://localhost:4000/api/v1',
});

export default request;
