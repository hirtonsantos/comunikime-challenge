import { type AddAccountModel, type AccountModel } from '../models/account'

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
