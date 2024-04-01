/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeSignUpController } from '../factories/controllers/signup-controller-factory'
import { makeSignInController } from '../factories/controllers/signin-controller-factory'

const authRouter = Router()

authRouter.post('/signup', adaptRoute(makeSignUpController()))
authRouter.post('/signin', adaptRoute(makeSignInController()))

export default authRouter
