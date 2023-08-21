import axios from 'axios';
import constants from './constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = constants.HOST_URL;

axiosClient.defaults.headers = constants.headers;

let token = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;

export default axios;

export function getCustomRequest(URL) {
  return axios.get(`/${URL}`).then(response => response);
}

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response);
}
