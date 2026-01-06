import {LocalStorage} from './storage'
import {api} from '@/api'
import {type User} from '~/types'
import {useUserStore} from '../stores/user'

class AuthServiceClass {
  private _user: User | null = null

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
      const userStore = useUserStore()
      this.setUser(res)
      userStore.setUser(res)
      return this.getUser()
    })
  }

  login({email, password}: {email: string; password: string}) {
    return api.authApi.login({email, password}).then(res => {
      const userStore = useUserStore()
      this.setToken(res.token)
      return this.getMe()
    })
  }
}

const AuthService = new AuthServiceClass()

export {AuthService}
