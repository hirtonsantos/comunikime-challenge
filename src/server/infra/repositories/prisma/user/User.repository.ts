import { type AddAccountRepository } from '../../../../data/protocols/add-account.repository'
import { Prisma, UserRole } from '@prisma/client';
import { AddAccountModel, AccountModel } from '@/server/domain/models/account';
import { LoadAccountByEmailRepository } from '@/server/data/protocols/load-account-by-email-repository';
import { LoadAccountByProductId } from '@/server/domain/usecases/load-account-by-product-id';
import { LoadAccountByTokenRepository } from '@/server/data/protocols/load-account-by-token-repository';
import { UpdateAccessTokenRepository } from '@/server/data/protocols/update-access-token-repository';

export class UserRepositoryPrisma implements 
    AddAccountRepository, 
    LoadAccountByEmailRepository, 
    LoadAccountByProductId,
    LoadAccountByTokenRepository,
    UpdateAccessTokenRepository
{
    constructor(private readonly prisma: Prisma.TransactionClient) {}
    async add (account: AddAccountModel) : Promise<AccountModel> {
        const newAccount = await this.prisma.user.create({ data: account });
        return newAccount
    }

    async loadByEmail (email: string) : Promise<LoadAccountByEmailRepository.Result | null> {
        const account = await this.prisma.user.findFirst({ where: { email } })
        return account
    }

    async loadByProductId (productId: number): Promise<LoadAccountByProductId.Result | null> {
        const product = await this.prisma.product.findFirst({
            where: {
                id: productId
            },
            include: {
                User: true
            }
        })

        const account = product?.User || null

        return account
    }

    async loadByToken (token: string, role?: UserRole | undefined): Promise<LoadAccountByTokenRepository.Result | null> {
        const account = await this.prisma.user.findFirst({
            where: {
                token,  
                ...(role !== undefined ? { role } : {})
            }
        })

        return account || null
    }

    async updateAccessToken (id: number, token: string):Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: { token }
        })
    }
}
