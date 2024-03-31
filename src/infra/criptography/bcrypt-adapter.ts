import { type HashComparer, type Hasher } from '../../data/protocols/cryptography'
import * as Bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (
    private readonly salt: number
  ) {}

  async hash (password: string): Promise<string> {
    const hash = await Bcrypt.hash(password, this.salt)
    return hash
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    const compare = await Bcrypt.compare(plaintext, digest)
    return compare
  }
}
