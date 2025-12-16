import axios, {type AxiosResponse} from 'axios'
import client from './client'

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const request = {
  get: <T>(url: string) => client.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => client.post<T>(url, body).then(responseBody),
  patch: <T>(url: string, body: {}) => client.patch<T>(url, body).then(responseBody),
  delete: <T>(url: string) => client.delete<T>(url).then(responseBody),
}

export {request}
