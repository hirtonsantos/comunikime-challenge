import { type AddSell } from '../../../domain/usecases/add-sell'
import { type SaveSellProduct } from '../../../domain/usecases/save-sell-product'
import { MissingParamError } from '../../errors'
import { badRequestError, ok } from '../../helpers'
import { handleErrors } from '../../helpers/errors'
import { type Controller, type HttpResponse } from '../../protocols'

export class AddSellController implements Controller {
  constructor (
    private readonly addSell: AddSell,
    private readonly saveSellProduct: SaveSellProduct
  ) {}

  async handler (httpRequest: AddSellController.Request): Promise<HttpResponse> {
    try {
      const { productId, totalCents, quantity } = httpRequest.body
      const accountId = Number(httpRequest.accountId)
      const requireFields = ['productId', 'totalCents', 'quantity']
      for (const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequestError(new MissingParamError(field))
        }
      }

      const sell = { productId, totalCents, quantity }
      const sellData = await this.addSell.add(sell, accountId)

      const sellProduct = {
        ...sellData,
        sellId: sellData.id,
        valueCents: totalCents,
        productId: Number(productId),
        quantity: Number(quantity)
      }

      const sellProductData = await this.saveSellProduct.save(sellProduct)
      return ok(sellProductData)
    } catch (error) {
      return handleErrors(error)
    }
  }
}

export namespace AddSellController {
  export interface Request {
    accountId: number
    body: any
  }
}
