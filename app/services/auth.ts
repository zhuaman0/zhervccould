import {LocalStorage} from './storage'
import {api} from '@/api'

class AuthServiceClass {
  _user = null

  parseToken() {}

  getToken() {
    const token = LocalStorage.get('token')
    return token ? `Bearer ${token}` : undefined
  }

  setToken(token: string) {
    LocalStorage.set(token)
  }

  getUser() {
    return this._user
  }

  setUser(user: User) {
    this._user = user
  }

  getMe() {
    return api.authApi.getMe().then(res => {
      this.setUser(res)

      return this.getUser()
    })
  }

  login({email, password}: {email: string; password: string}) {
    return api.authApi.login({email, password}).then(res => {
      this.setToken(res.token)
      return this.getMe()
    })
  }

  // auth({usename, password}) {
  // api.login({usename, password}).then(res => {
  //   this.setToken(res.token)
  // })
  // }
}

const AuthService = new AuthServiceClass()

export {AuthService}
