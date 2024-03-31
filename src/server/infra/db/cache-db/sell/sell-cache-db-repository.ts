import { type AddSellRepository } from '../../../../data/protocols/add-sell.repository'
import { SellCurrentStatus, type AddSellModel, type SellModel } from '../../../../domain/models/sells'

export class SellCacheRepository implements AddSellRepository {
  async add (sell: AddSellModel, ownerId: number): Promise<SellModel> {
    return {
      id: 456,
      customerId: sell.customerId,
      totalCents: sell.totalCents,
      ownerId,
      status: SellCurrentStatus.PAID
    }
  }
}
