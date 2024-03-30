import { AccountRole, type AccountModel, type AddAccountModel } from '../../domain/models/account'
import { type AddAccountRepository } from '../protocols/add-account.repository'
import { type EncryptProtocol } from '../protocols/encrypt.protocol'
import { AddAccountData } from './add-account'

class MakeAccountRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountCreated = Object.assign({}, account, { password: 'hashed_password', id: 'valid_id' })
    return await new Promise(resolve => { resolve(accountCreated) })
  }
}

const makeAddRepository = (): MakeAccountRepository => {
  const makeAddRepository = new MakeAccountRepository()
  return makeAddRepository
}

class MakeEncrypt implements EncryptProtocol {
  async handle (password: string): Promise<string> {
    return await new Promise(resolve => { resolve('hashed_password') })
  }
}

const makeEncrypt = (): MakeEncrypt => {
  const makeEncrypt = new MakeEncrypt()
  return makeEncrypt
}

interface MakeSupTypes {
  makeEncryptStub: MakeEncrypt
  makeAddRepositoryStub: MakeAccountRepository
  sup: AddAccountData
}

const makeSup = (): MakeSupTypes => {
  const makeEncryptStub = makeEncrypt()
  const makeAddRepositoryStub = makeAddRepository()
  const sup = new AddAccountData(makeEncryptStub, makeAddRepositoryStub)
  return { sup, makeEncryptStub, makeAddRepositoryStub }
}

describe('add-account', () => {
  test('should call be function with correct password value', async () => {
    const { sup, makeEncryptStub } = makeSup()
    const encrypterSpyOn = jest.spyOn(makeEncryptStub, 'handle')
    const account = {
      name: 'name_valid',
      email: 'email_valid',
      password: 'password_valid',
      role: AccountRole.ADMINISTRATOR
    }
    await sup.add(account)
    expect(encrypterSpyOn).toHaveBeenCalledWith('password_valid')
  })

  test('should be return in Encrypt value with password_hash', async () => {
    const { sup, makeEncryptStub } = makeSup()
    const spyOnAddAccountRepository = jest.spyOn(makeEncryptStub, 'handle')
    const accountData = {
      id: 'valid_id',
      name: 'name_valid',
      email: 'email_valid',
      password: 'password_valid',
      role: AccountRole.ADMINISTRATOR
    }
    await sup.add(accountData)
    await expect(spyOnAddAccountRepository.mock.results[0].value).resolves.toEqual('hashed_password')
  })

  test('should be return in AccountRepository account created with correct values', async () => {
    const { sup, makeAddRepositoryStub } = makeSup()
    const spyOnAddAccountRepository = jest.spyOn(makeAddRepositoryStub, 'add')
    const accountDataRequest = {
      id: 'valid_id',
      name: 'name_valid',
      email: 'email_valid',
      password: 'password_valid',
      role: AccountRole.ADMINISTRATOR
    }
    await sup.add(accountDataRequest)
    const spyResults = spyOnAddAccountRepository.mock.results[0].value
    await expect(spyResults).resolves.toEqual(
      { ...accountDataRequest, password: 'hashed_password' }
    )
  })

  test('should be return account created', async () => {
    const { sup } = makeSup()
    const accountDataRequest = {
      id: 'valid_id',
      name: 'name_valid',
      email: 'email_valid',
      password: 'password_valid',
      role: AccountRole.ADMINISTRATOR
    }
    const account = await sup.add(accountDataRequest)
    expect({ ...account }).toEqual({ ...accountDataRequest, password: 'hashed_password' })
  })
})
