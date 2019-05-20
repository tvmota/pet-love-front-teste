import axios from 'axios'

export const Api = axios.create({
  baseURL: 'http://localhost:3333/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
