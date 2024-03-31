/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeSignUpController } from '../factories/controllers/signup-controller-factory'

const authRouter = Router()

authRouter.post('/signup', adaptRoute(makeSignUpController()))

export default authRouter
