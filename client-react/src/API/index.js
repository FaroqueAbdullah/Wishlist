import axios from "axios";

import store from "../Redux/store";
import { logInUserFailed } from '../Redux/actions/user';

const apiURL = 'http://localhost:4000'; 

axios.interceptors.request.use(function (config) {
    const token = store.getState().user.jwt;
    config.headers['x-access-token'] = token;
    config.headers['Content-Type'] = 'application/json';
    return config;
});

export async function getProductApi(payload) {
    const queryAPI = apiURL + '/product/?searchName=' + payload;
    return await axios.get(queryAPI, {
      headers: {'Content-Type': 'application/json' },
    }).then(response => response.data)
      .catch(error => console.log(error));
  }

export async function logInApi(payload) {
    return await axios.post(apiURL + '/auth/login', payload, {})
    .then(response => response.data)
    .catch(error => logInUserFailed(error.response.data));
}

export async function signUpApi(payload) {
    return await axios.post(apiURL + '/auth/registration', payload, {})
    .then(response => response.data)
    .catch(error => logInUserFailed(error.response.data));
}

export async function getJWT() {
    const userData = await localStorage.getItem('userData');
    return JSON.parse(userData).jwt;
}
  
export async function getWishlistApi() {
    return await axios.get(apiURL + '/wishlist', {})
    .then(response => response.data)
    .catch(error => console.log(error));
}
  
export async function postWishlistApi(payload) {
    return await axios.post(apiURL + '/wishlist', payload, {})
    .then(response => response.data)
    .catch(error => console.log(error));
}
  
export async function deleteWishlistApi(payload) {
    return await axios.delete(apiURL + '/wishlist',  {data:payload})
    .then(response => response.data)
    .catch(error => console.log(error));
}