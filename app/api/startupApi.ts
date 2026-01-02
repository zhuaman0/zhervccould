import type {Investor, DetailInvestorResponse} from '~/types'
import {serializeParams} from './utils'
import {request} from './request'

type GetStartupListParams = {
  industryIds?: string[]
  technologyIds?: string[]
  query?: string
}

export const startupApi = {
  getStartupList: (params: GetStartupListParams) =>
    request.get<Investor[]>(`/Investor?${serializeParams(params)}`),
  getDetailList: (pathId: string) =>
    request.get<DetailInvestorResponse>(`/Investor/${pathId}`),
}
