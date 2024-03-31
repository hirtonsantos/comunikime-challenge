export interface LoadAccountByProductId {
  loadByProductId: (productId: number) => Promise<LoadAccountByProductId.Result | null>
}

export namespace LoadAccountByProductId {
  export interface Result {
    id: number
  }
}
