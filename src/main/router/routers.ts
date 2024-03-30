/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import authRouter from './auth-router'
import productRouter from './product-router'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/product', productRouter)

export default routes
