import {defineStore} from 'pinia'
import type {User} from '~/types'

type UserStore = {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    user: null,
  }),

  getters: {
    currentUser(state) {
      return state.user
    },
  },

  actions: {
    setUser(user: User) {
      this.user = user
    },

    logout() {
      this.user = null
    },

    getUser() {
      return this.user
    },
  },
})
