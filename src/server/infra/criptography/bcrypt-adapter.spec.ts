import * as Bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

const salt = 12

jest.mock('Bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hash')
}))

interface makeSupTypes {
  bcryptSup: BcryptAdapter
}

const makeSup = (): makeSupTypes => {
  const bcryptSup = new BcryptAdapter(salt)
  return { bcryptSup }
}

describe('Bcrypt Adapter', () => {
  test('should call be Bcrypt with correct value', async () => {
    const { bcryptSup } = makeSup()
    const spyOn = jest.spyOn(Bcrypt, 'hash')
    await bcryptSup.hash('any_value')
    expect(spyOn).toHaveBeenCalledWith('any_value', salt)
  })

  test('should Bcrypt returns with hash value', async () => {
    const { bcryptSup } = makeSup()
    const hash = await bcryptSup.hash('any_value')
    expect(hash).toBe('hash')
  })
})
