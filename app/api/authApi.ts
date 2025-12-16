import { request } from "./request";
import type { User, UserLogin } from "~/types/auth";

export const authApi = {
    setRegisterUser: (value: User) => {
        request.post('/Users/register', value)
    },
    setLoginUser: (value: UserLogin) => {
        request.post('/Users/login', value)
    }
}