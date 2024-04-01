import { type LoadManyProducts } from '../../../domain/usecases/load-many-products'
import { ok } from '../../helpers'
import { handleErrors } from '../../helpers/errors'
import { type Controller, type HttpResponse } from '../../protocols'

export class LoadManyController implements Controller {
  constructor (
    private readonly loadManyProducts: LoadManyProducts,
  ) {}

  async handler (httpRequest: LoadManyController): Promise<HttpResponse> {
    try {
      const products = await this.loadManyProducts.manyProducts()
      return ok(products)
    } catch (error) {
      return handleErrors(error)
    }
  }
}
