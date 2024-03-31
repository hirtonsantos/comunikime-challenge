import type { AddSellModel, SellModel } from '../../domain/models/sells'

export interface AddSellRepository {
  add: (sell: AddSellModel, ownerId: number) => Promise<SellModel>
}
