/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeSignInController } from '../factories/controllers/signin-controller-factory'
import { makeSignUpController } from '../factories/controllers/signup-controller-factory'

const authRouter = Router()

authRouter.post('/register', adaptRoute(makeSignUpController()))
authRouter.post('/signin', adaptRoute(makeSignInController()))

export default authRouter
