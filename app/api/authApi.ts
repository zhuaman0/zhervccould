import {request} from './request'
import type {User, UserLogin, UserLoginResponse} from '~/types/auth'

export const authApi = {
  register: (value: User) => {
    return request.post('/Users/register', value)
  },
  login: (value: UserLogin) => request.post<UserLoginResponse>('/Users/login', value),
  getMe: () => '',
}
