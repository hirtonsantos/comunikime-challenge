import { type ProductModel } from '../models/product'

export interface LoadProductById {
  loadById: (id: number) => Promise<LoadProductById.Result | null>
}

export namespace LoadProductById {
  export interface Result extends ProductModel {}
}
