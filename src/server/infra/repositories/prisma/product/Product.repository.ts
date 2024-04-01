import { Prisma } from '@prisma/client';
import { AddProductRepository } from '@/server/data/protocols/add-product.repository';
import { AddProductModel, ProductModel } from '@/server/domain/models/product';
import { LoadProductById, LoadProductByIdRepository } from '@/server/data/protocols/load-product-by-id-repository';
import { LoadManyProducts } from '@/server/domain/usecases/load-many-products';

export class ProductRepositoryPrisma implements 
    AddProductRepository, 
    LoadProductByIdRepository,
    LoadManyProducts
{
    constructor(private readonly prisma: Prisma.TransactionClient) {}
    async add (product: AddProductModel, ownerId: number) : Promise<ProductModel> {
        const newProduct = await this.prisma.product.create({ 
            data: {
                ...product,
                User: {
                    connect: {
                        id: ownerId
                    }
                }
            } 
        });
        return newProduct
    }

    async loadById(id: number) : Promise<LoadProductById.Result | null> {
        const product = await this.prisma.product.findFirst({ where: { id } })
        return product
    }

    async manyProducts(): Promise<ProductModel[]> {
        const products = await this.prisma.product.findMany()
        return products
    }
}
