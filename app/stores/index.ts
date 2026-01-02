import {defineStore} from 'pinia'
import {type ServiceStore} from './types'

export const useServiceStore = defineStore('service', {
  state: (): ServiceStore => ({
    pageLoading: false, // not needed
    userNotFound: false, // not needed
    productNotFount: false, // not needed
    language: 'kz',
  }),
})
