import { type AccountModel, type AddAccountModel } from '../../domain/models/account'
import { type AddAccount } from '../../domain/usecases/add-account'
import { type EncryptProtocol } from '../protocols/encrypt.protocol'
import { type AddAccountRepository } from '../protocols/add-account.repository'

export class AddAccountData implements AddAccount {
  constructor (
    private readonly encryptValidator: EncryptProtocol,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encryptValidator.handle(accountData.password)
    const createAccount = Object.assign({}, accountData, { password: hashedPassword })
    const account = await this.addAccountRepository.add(createAccount)
    return account
  }
}
