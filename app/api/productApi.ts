import type {Product} from '~/types'
import {request} from './request'

export const productApi = {
  getProductList: () => request.get<Product[]>('/Investor'),
}
