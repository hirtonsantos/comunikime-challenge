export interface EncryptProtocol {
  handle: (password: string) => Promise<string>
}
