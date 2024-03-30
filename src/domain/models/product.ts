export enum ProductStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DISAPPROVED = 'DISAPPROVED',
  PAUSED = 'PAUSED'
}

export interface ProductModel {
  id: string
  name: string
  price: string
  description: string
  quantity: number
  suportMailAdress: string
  status: ProductStatus
  category: string
}

export interface AddProductModel {
  name: string
  price: string
  description: string
  quantity: number
  category: string
  suportMailAdress: string
}
