import { type AddAccountRepository } from '../../../../data/protocols/add-account.repository'
import { type LoadAccountByEmailRepository } from '../../../../data/protocols/load-account-by-email-repository'
import { type LoadAccountByTokenRepository } from '../../../../data/protocols/load-account-by-token-repository'
import { type UpdateAccessTokenRepository } from '../../../../data/protocols/update-access-token-repository'
import { type AddAccountModel, type AccountModel } from '../../../../domain/models/account'
import { type LoadAccountByProductId } from '../../../../domain/usecases/load-account-by-product-id'
import { type LoadAccountByToken } from '../../../../domain/usecases/load-account-by-token'

export class AccountCacheRepository implements 
AddAccountRepository, LoadAccountByToken, UpdateAccessTokenRepository, 
LoadAccountByEmailRepository, LoadAccountByProductId {
  async add (account: AddAccountModel): Promise < AccountModel > {
    const accountCreated = {
      ...account,
      id: '546'
    }

    return accountCreated
  }

  async load (token: string, role?: string | undefined): Promise<LoadAccountByTokenRepository.Result> {
    return {
      id: '546'
    }
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    console.log({ id, token })
  }

  async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
    return {
      id: '546',
      name: 'Hirton Santos',
      password: '12345678'
    }
  }

  async loadByProductId (productId: number): Promise<LoadAccountByProductId.Result> {
    return {
      id: 999
    }
  }
}
