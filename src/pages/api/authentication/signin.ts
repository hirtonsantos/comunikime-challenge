
import { ICreateSessionUseCase } from '@/server/domain/usecases/i-create-session.usecase';
import { adaptRoute } from '@/server/main/adapters/express-router-adapter';
import { makeSignInController } from '@/server/main/factories/controllers/signin-controller-factory';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const data: ICreateSessionUseCase.Params = request.body;
    console.log('ain 2023')
    const signinComposer = adaptRoute(makeSignInController());
    return signinComposer
  } catch (err: any) {
    // ResponseError(err, response);
  }
}
