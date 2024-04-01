import { type AddAccountRepository } from '../../../../data/protocols/add-account.repository'
import { Prisma } from '@prisma/client';
import { AddAccountModel, AccountModel } from '@/server/domain/models/account';
import { AddSellRepository } from '@/server/data/protocols/add-sell.repository';
import { AddSellModel, SellModel } from '@/server/domain/models/sells';

export class SellRepositoryPrisma implements AddSellRepository {
    constructor(private readonly prisma: Prisma.TransactionClient) {}
    async add (sell: AddSellModel) : Promise<SellModel> {
        const newSell = await this.prisma.sell.create({ data: sell});
        return newSell
    }
}
