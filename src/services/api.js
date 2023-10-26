/* eslint-disable dot-notation */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export function setAuthorization(token) {
  api.defaults.headers.common['authorization'] = `Bearer ${token}`;
}

export function removeAuthorization(token) {
  delete api.defaults.headers.common['authorization'];
}
