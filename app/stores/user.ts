import {defineStore} from 'pinia'
import type {User} from '~/types'

type UserStore = {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    user: null,
  }),
})
