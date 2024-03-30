import { type EncryptProtocol } from '../../data/protocols/encrypt.protocol'
import * as Bcrypt from 'bcrypt'

export class BcryptAdapter implements EncryptProtocol {
  constructor (
    private readonly salt: number
  ) {}

  async handle (password: string): Promise<string> {
    const hash = await Bcrypt.hash(password, this.salt)
    return hash
  }
}
