import {defineStore} from 'pinia'
import {type ServiceStore} from './types'

export const useServiceStore = defineStore('service', {
  state: (): ServiceStore => ({
    pageLoading: false,
    userNotFound: false,
    productNotFount: false,
    language: 'kz',
  }),
})
