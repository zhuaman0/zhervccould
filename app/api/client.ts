import axios from 'axios'
import {AuthService} from '@/services'

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use(config => {
  const token = AuthService.getToken()

  if (token) config.headers.Authorization = token

  return config
})

export default client
