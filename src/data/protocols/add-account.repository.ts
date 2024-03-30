import { type AccountModel, type AddAccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
