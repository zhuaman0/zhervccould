export interface Product {
    id: number,
    fullName: string,
    organizationName: string,
    investorType: string,
    publicEmail: string,
    countryName: string,
    profilePhotoPath: string
}

export interface ProductListResponse {
    product: Product[]
}