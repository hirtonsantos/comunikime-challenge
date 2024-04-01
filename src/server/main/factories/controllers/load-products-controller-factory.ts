import { prismaConnection } from "@/server/infra/db/prisma"
import { ProductRepositoryPrisma } from "@/server/infra/repositories/prisma/product/Product.repository"
import { LoadManyController } from "@/server/presentation/controllers/loadAllProducts"
import { Controller } from "@/server/presentation/protocols"

export const makeLoadProductsController = (): Controller => {
    const prismaService = prismaConnection
    const loadManyProducts = new ProductRepositoryPrisma(prismaService) 
    const controller = new LoadManyController(loadManyProducts)
    return controller
  }
  