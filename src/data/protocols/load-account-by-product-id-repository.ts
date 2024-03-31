export interface LoadAccountByProductIdRepository {
  loadByProductId: (productId: number) => Promise<LoadAccountByProductId.Result>
}

export namespace LoadAccountByProductId {
  export interface Result {
    id: number
  }
}
