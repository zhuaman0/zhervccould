import { axiosInstance } from "#imports";

export const productApi = {
    getProductList: () => axiosInstance.get('/Investor')
}