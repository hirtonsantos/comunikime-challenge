import jwt from 'jsonwebtoken'
import { type Decrypter } from '../../data/protocols/cryptography/decrypter'
import { type Encrypter } from '../../data/protocols/cryptography/encrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, '123')
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, '123') as any
  }
}
