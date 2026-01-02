import type {
  InvestorResponse,
  InvestorCreateRequest,
  DetailInvestorResponse,
} from '~/types'

import {request} from './request'

export const startupApi = {
  getStartupList: () => request.get<InvestorResponse[]>('/Investor'),
  getDetailList: (pathId: string) =>
    request.get<DetailInvestorResponse>(`/Investor/${pathId}`),
}
