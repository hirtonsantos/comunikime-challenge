import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

const makeSup = (): EmailValidatorAdapter => {
  const sup = new EmailValidatorAdapter()
  return sup
}

const makeMailValidatorSup = (isValid: boolean = true): void => {
  jest.spyOn(validator, 'isEmail').mockReturnValueOnce(isValid)
}

describe('email-validator', () => {
  test('should returns false when email-validator is invalid', () => {
    const emailParamTest = 'invalid_mail@mail.com'
    makeMailValidatorSup(false)
    const sup = makeSup()
    const isValid = sup.isValid(emailParamTest)
    expect(isValid).toBe(false)
  })

  test('should returns true when email-validator is valid', () => {
    const emailParamTest = 'valid_mail@mail.com'
    makeMailValidatorSup()
    const sup = makeSup()
    const isValid = sup.isValid(emailParamTest)
    expect(isValid).toBe(true)
  })

  test('should call values correct in validator function', () => {
    const emailParamTest = 'valid_mail@mail.com'
    const isEmail = jest.spyOn(validator, 'isEmail')
    const sup = makeSup()
    sup.isValid(emailParamTest)
    expect(isEmail).toHaveBeenCalledWith(emailParamTest)
  })
})
