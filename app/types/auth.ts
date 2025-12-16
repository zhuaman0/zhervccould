export type User =  {
    fullName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: string
}

export type UserLogin = {
    email: string,
    password: string
}

export type UserLoginResponse = {
    token: string
}