import {api} from '@/api'
import {type User} from '~/types'
import {LocalStorage} from './storage'
import {useUserStore} from '../stores/user'

class AuthServiceClass {
  private _user: User | null = null

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
    useUserStore().setUser(user)
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

  init() {
    const token = this.getToken()
    if (token)
      return this.getMe().catch(err => {
        console.log(err)
      })
    return Promise.resolve()
  }
}

const AuthService = new AuthServiceClass()

export {AuthService}
