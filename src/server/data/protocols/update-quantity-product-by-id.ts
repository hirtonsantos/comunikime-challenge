export interface UpdateQuantityProductByIdRepository {
    updateQuantity: (ownerId: number, quantity: number) => Promise<void>
}