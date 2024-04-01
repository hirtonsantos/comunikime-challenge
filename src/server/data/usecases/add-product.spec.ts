import { ProductStatus } from '@prisma/client'
import { type ProductModel, type AddProductModel } from '../../domain/models/product'
import { type AddProductRepository } from '../protocols/add-product.repository'
import { AddProductData } from './add-product'

class AddProductRepositoryMock implements AddProductRepository {
  async add (productData: AddProductModel): Promise<ProductModel> {
    const productCreated: ProductModel = Object.assign({}, productData, {
      id: 987, status: ProductStatus.PENDING
    })
    return await Promise.resolve(productCreated)
  }
}

const makeAddProductData = (): AddProductData => {
  const addProductRepositoryMock = new AddProductRepositoryMock()
  return new AddProductData(addProductRepositoryMock)
}

describe('AddProductData', () => {
  /*
  test('should call AddProductRepository with correct values', async () => {
    const addProductData = makeAddProductData()
    const addProductRepositoryMock = new AddProductRepositoryMock()
    const spyOnAddProductRepository = jest.spyOn(addProductRepositoryMock, 'add')

    const productData: AddProductModel = {
      name: 'Product Name',
      price: '10.99',
      category: 'Electronics',
      description: 'Product Description',
      quantity: 20,
      suportMailAdress: 'suport_adress@email.com'
    }

    await addProductData.add(productData)
    expect(spyOnAddProductRepository).toHaveBeenCalledWith(productData)
  })
  */

  test('should return product created', async () => {
    const addProductData = makeAddProductData()
    const productData = {
      id: 987,
      name: 'Product Name',
      price: '10.99',
      category: 'Electronics',
      description: 'Product Description',
      quantity: 20,
      suportMailAdress: 'suport_adress@email.com'
    }

    const productCreated = await addProductData.add(productData, 987)
    expect(productCreated).toEqual({
      ...productData,
      status: ProductStatus.PENDING
    })
  })
})
