import { type AddAccountRepository } from '../../../../data/protocols/add-account.repository'
import { type AddAccountModel, type AccountModel } from '../../../../domain/models/account'

export class AddAccountCacheDb implements AddAccountRepository {
  async add (account: AddAccountModel): Promise < AccountModel > {
    const accountCreated = {
      ...account,
      id: '546'
    }

    return accountCreated
  }
}
