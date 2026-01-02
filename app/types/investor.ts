import {string} from 'zod'
import type {id} from 'zod/locales'

export type InvestorCreateRequest = {
  fullName: string
  contactFullName: string
  publicEmail: string
  phoneNumber?: string

  countryId: number
  website?: string
  organizationName?: string
  investorType?: string
  identificationNumber?: string
  description?: string

  investmentAmount?: number
  hasStartupPilotExperience?: boolean
  investsInStartups?: boolean
  sourceInfoId?: number

  profilePhoto?: File | null
  logo?: File | null

  industryIds: number[]
  technologyIds: number[]
  innovationMethodIds: number[]
  developmentStageIds: number[]
}

export type InvestorResponse = {
  id: number
  fullName: string
  organizationName: string
  investorType: string
  publicEmail: string
  countryName: string
  profilePhotoPath: string
}

export type DetailInvestorResponse = {
  id: string
  fullName: string
  contactFullName: string
  publicEmail: string
  phoneNumber?: string
  countryName: string
  website?: string
  organizationName?: string
  identificationNumber?: string
  description?: string
  investmentAmount?: number
  hasStartupPilotExperience?: boolean
  investsInStartups?: boolean
  profilePhotoPath?: string
  logoPath?: string
  industries: string[]
  technologies: string[]
  innovationMethods: string[]
  developmentStages: string[]
}
