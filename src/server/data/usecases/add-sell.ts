import { type AddSellModel, type SellModel } from '../../domain/models/sells'
import { type AddSell } from '../../domain/usecases/add-sell'
import { AccessDeniedError } from '../../presentation/errors/acessDeniedError'
import { type AddSellRepository } from '../protocols/add-sell.repository'
import { type LoadAccountByProductIdRepository } from '../protocols/load-account-by-product-id-repository'
import { UpdateQuantityProductByIdRepository } from '../protocols/update-quantity-product-by-id'

export class AddSellData implements AddSell {
  constructor (
    private readonly sellRepository: AddSellRepository,
    private readonly loadAccountByProductIdRepository: LoadAccountByProductIdRepository,
    private readonly updateQuantityProduct: UpdateQuantityProductByIdRepository
  ) {}

  async add (sell: Omit<AddSellModel, 'customerId'>, customerId: number): Promise<SellModel> {
    const ownerProduct = await this.loadAccountByProductIdRepository.loadByProductId(sell.productId)
    if (!ownerProduct || customerId === ownerProduct.id) {
      throw new AccessDeniedError()
    }
    const sellPriceCalculed = this.calculeTotalSellCents(sell.quantity, sell.totalCents)
    const addSell = {
      productId: sell.productId,
      totalCents: String(sellPriceCalculed),
      quantity: sell.quantity,
      customerId
    }
    console.log({addSell})
    const sellCreated = await this.sellRepository.add(addSell, ownerProduct.id)
    this.updateQuantityProduct.updateQuantity(ownerProduct.id, sell.quantity)
    return sellCreated
  }

  private calculeTotalSellCents (quantity: number, totalCents: string): number {
    const priceToNumber = parseFloat(totalCents.replace(/\./g, '').replace(',', '.'))
    const calcule = quantity * priceToNumber
    return calcule
  }
}
