/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeAddProductController } from '../factories/controllers/add-product-controller-factory'

const productRouter = Router()

productRouter.post('/', adaptRoute(makeAddProductController()))

export default productRouter
