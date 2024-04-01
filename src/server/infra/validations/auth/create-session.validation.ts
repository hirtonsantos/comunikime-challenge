import { ICreateSessionValidation } from '@/server/domain/validations/auth/i-create-session.validation';
import { AppError } from '@/server/presentation/errors/appError';

export class CreateSessionValidation implements ICreateSessionValidation {
  async validate(data: ICreateSessionValidation.Params): Promise<void> {
    const { email, password } = data;
    if (!email) {
      throw new AppError({
        code: 'authentication_validation',
        error: 'Email é obrigatória!',
        message: 'email is required',
        statusCode: 400,
      });
    }
    if (!password) {
      throw new AppError({
        code: 'authentication_validation',
        error: 'Senha é obrigatória!',
        message: 'password is required',
        statusCode: 400,
      });
    }
  }
}
