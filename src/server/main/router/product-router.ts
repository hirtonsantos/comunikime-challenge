/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeAddProductController } from '../factories/controllers/add-product-controller-factory'
import { adminAuth } from '../middleware/admin-auth'
import { makeLoadProductsController } from '../factories/controllers/load-products-controller-factory'

const productRouter = Router()

productRouter.post('/', adminAuth, adaptRoute(makeAddProductController()))
productRouter.get('/', adminAuth, adaptRoute(makeLoadProductsController()))

export default productRouter
