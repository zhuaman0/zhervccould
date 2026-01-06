import {request} from './request'
import type {SelectOption} from '~/types'

export const filterApi = {
  getTechnologyFilters: () => request.get<SelectOption>('/Technologies'),
  getSourceFilters: () => request.get<SelectOption>('/Sourceinfoes'),
  getSalesFilters: () => request.get<SelectOption>('/Salesmodels'),
  getIndustriesFilters: () => request.get<SelectOption>('/Industries'),
}
