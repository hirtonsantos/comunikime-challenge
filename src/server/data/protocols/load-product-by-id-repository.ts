import { type ProductModel } from '../../domain/models/product'

export interface LoadProductByIdRepository {
  loadById: (id: number) => Promise<LoadProductById.Result | null>
}

export namespace LoadProductById {
  export interface Result extends ProductModel {}
}
