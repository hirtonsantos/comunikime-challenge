import { type AddProductRepository } from '../../../../data/protocols/add-product.repository'
import { ProductStatus, type AddProductModel, type ProductModel } from '../../../../domain/models/product'
import { type LoadProductById } from '../../../../domain/usecases/load-product-by-id'

export class ProductCacheDb implements AddProductRepository, LoadProductById {
  async add (product: AddProductModel): Promise <ProductModel> {
    const productCreated: ProductModel = {
      ...product,
      status: ProductStatus.APPROVED,
      id: 987
    }

    return await Promise.resolve(productCreated)
  }

  async loadById (id: number): Promise<LoadProductById.Result> {
    const product: ProductModel = {
      id: 987,
      status: ProductStatus.APPROVED,
      name: 'Product Name',
      price: '10.99',
      category: 'Electronics',
      description: 'Product Description',
      quantity: 20,
      suportMailAdress: 'suport_adress@email.com'
    }

    return await Promise.resolve(product)
  }
}
