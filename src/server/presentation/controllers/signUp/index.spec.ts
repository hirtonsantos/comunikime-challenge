import { SignUpController } from '.'
import { type Authentication } from '../../../domain/usecases/authentication'
import { InternalServerError, InvalidEmailError, MissingParamError } from './errors'
import type { AccountModel, AddAccountModel, EmailValidator, HttpRequest, AddAccount } from './protocols'
import faker from 'faker'

class MakeAddAccount implements AddAccount {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const fakeAccount = {
      ...account,
      id: 'valid_id'
    }
    const data = await Promise.resolve(fakeAccount)
    return data
  }
}

const addAccountSup = (): MakeAddAccount => {
  const sup = new MakeAddAccount()
  return sup
}

class MakeEmailValidator implements EmailValidator {
  isValid (email: string): boolean {
    const emailIsValid = email.includes('@')
    return emailIsValid
  }
}

const emailValidator = (): MakeEmailValidator => {
  const sup = new MakeEmailValidator()
  return sup
}

export class AuthenticationSpy implements Authentication {
  result = {
    accessToken: faker.datatype.uuid(),
    name: faker.name.findName()
  }

  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    return this.result
  }
}

interface MakeSup {
  sup: SignUpController
  fakeEmailValidator: MakeEmailValidator
  fakeAddAccount: MakeAddAccount
}

const makeSup = (): MakeSup => {
  const fakeAuthenticationSpy = new AuthenticationSpy()
  const fakeEmailValidator = emailValidator()
  const fakeAddAccount = addAccountSup()
  const sup = new SignUpController(fakeEmailValidator, fakeAddAccount, fakeAuthenticationSpy)
  return { sup, fakeEmailValidator, fakeAddAccount }
}

describe('SignUp Controller', () => {
  test('error 400 when name not is provider', async () => {
    const { sup } = makeSup()
    const httpRequest = {
      body: {
        email: 'any_mail',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param name'))
  })

  test('error 400 when email not is provider', async () => {
    const { sup } = makeSup()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param email'))
  })

  test('error 400 when password not is provider', async () => {
    const { sup } = makeSup()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail',
        confirmPassword: 'any_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param password'))
  })

  test('error 400 confirmPassword name not is provider', async () => {
    const { sup } = makeSup()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail',
        password: 'any_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new Error('missing param confirmPassword'))
  })

  test('should return error 400 if email is invalid', async () => {
    const { sup } = makeSup()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidEmailError())
  })

  test('should be call EmailValidator with correct email', async () => {
    const { sup, fakeEmailValidator } = makeSup()
    const emailIsValid = jest.spyOn(fakeEmailValidator, 'isValid')
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    await sup.handler(httpRequest)
    expect(emailIsValid).toHaveBeenCalledWith('any_email')
  })

  test('should be call internal server error when throw EmailValidator', async () => {
    const { sup, fakeEmailValidator } = makeSup()
    const emailIsValid = jest.spyOn(fakeEmailValidator, 'isValid').mockImplementation(() => {
      throw new Error('internal server error')
    })
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    await sup.handler(httpRequest)
    expect(emailIsValid).toThrow(new InternalServerError())
  })

  test('should return throw bad request if confirmPassword is invalid', async () => {
    const { sup, fakeEmailValidator } = makeSup()
    jest.spyOn(fakeEmailValidator, 'isValid').mockReturnValue(true)
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail',
        password: 'any_password',
        confirmPassword: 'invalid_password'
      }
    }
    const httpResponse = await sup.handler(httpRequest)
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('confirmPassword'))
  })

  test('should return 200 if a account is created', async () => {
    const { sup, fakeAddAccount, fakeEmailValidator } = makeSup()
    jest.spyOn(fakeEmailValidator, 'isValid').mockReturnValue(true)
    const addSpyOn = jest.spyOn(fakeAddAccount, 'add')
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    await sup.handler(httpRequest)
    expect(addSpyOn).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_mail',
      password: 'any_password'
    })
  })

  test('should be if created account values without password and with id ', async () => {
    const { sup, fakeAddAccount, fakeEmailValidator } = makeSup()
    const addSpyOn = jest.spyOn(fakeAddAccount, 'add')
    jest.spyOn(fakeEmailValidator, 'isValid').mockReturnValue(true)
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    await sup.handler(httpRequest)
    expect(addSpyOn).toHaveBeenCalledWith({
      name: 'any_name',
      email: 'any_mail',
      password: 'any_password'
    })
    await expect(addSpyOn.mock.results[0].value).resolves.toEqual({
      id: 'valid_id',
      email: 'any_mail',
      name: 'any_name',
      password: 'any_password'
    })
  })

  test('should be call internal server error when throw account created', async () => {
    const { sup, fakeAddAccount } = makeSup()
    const addSpyOn = jest.spyOn(fakeAddAccount, 'add').mockImplementation(() => {
      throw new Error('internal server error')
    })
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        confirmPassword: 'any_password'
      }
    }
    await sup.handler(httpRequest)
    expect(addSpyOn).toThrow(new InternalServerError())
  })
})
