import { ProductStatus } from "@prisma/client"


export interface ProductModel {
  id: number
  name: string
  price: string
  description: string | null
  quantity: number
  suportMailAdress: string | null
  status: ProductStatus | null
  category: string
}

export interface AddProductModel {
  name: string
  price: string
  description: string
  quantity: number
  category: string
  suportMailAdress: string | null
}
