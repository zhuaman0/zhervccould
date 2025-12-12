import {LocalStorage} from './storage'
import {api} from '@/api'

class AuthServiceClass {
  getUserId() {}

  parseToken() {}

  getToken() {
    const token = LocalStorage.get('token')
    return token ? `Bearer ${token}` : undefined
  }

  setToken() {}

  // auth({usename, password}) {
  // api.login({usename, password}).then(res => {
  //   this.setToken(res.token)
  // })
  // }
}

const AuthService = new AuthServiceClass()

export {AuthService}
