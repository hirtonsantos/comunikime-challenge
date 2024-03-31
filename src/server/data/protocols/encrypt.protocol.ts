export interface EncryptProtocol {
  hash: (password: string) => Promise<string>
}
