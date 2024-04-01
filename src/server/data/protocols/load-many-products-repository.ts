import { type ProductModel } from '../../domain/models/product'

export interface LoadManyProductsRepository {
    manyProducts: () => Promise<ProductModel[]>
}
