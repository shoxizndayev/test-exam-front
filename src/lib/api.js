import axios from 'axios';


export const api = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API,
  });
};


export const host = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
      token: token,
    },
  });
};
