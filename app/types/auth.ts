import type {ValueOf} from './common'

export const USER_ROLES = {
  investor: 'Investor',
  startup: 'Startup',
} as const

// export type USER_ROLES = (typeof USER_ROLES)[keyof typeof USER_ROLES]
export type USER_ROLES = ValueOf<typeof USER_ROLES>

export type User = {
  fullname: string
  email: string
  phonenumber: string
  password: string
  role: string
}

export type UserLogin = {
  email: string
  password: string
}

export type UserLoginResponse = {
  token: string
}
