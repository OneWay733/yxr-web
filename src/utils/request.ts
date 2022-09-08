import axios from 'axios'
import type { AxiosInstance } from 'axios'

const request:AxiosInstance = axios.create({
  baseURL: 'http://localhost:8888',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
