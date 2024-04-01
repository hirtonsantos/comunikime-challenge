import { LoadAccountByEmailRepository } from '@/server/data/protocols/load-account-by-email-repository';
import { ICreateSessionUseCase } from '@/server/domain/usecases/i-create-session.usecase';
import { ICreateSessionValidation } from '@/server/domain/validations/auth/i-create-session.validation';
import { BcryptAdapter } from '@/server/infra/criptography/bcrypt-adapter';
import { JwtAdapter } from '@/server/infra/criptography/jwt-adapter';
import { AppError } from '@/server/presentation/errors/appError';

export class CreateSessionUseCase implements ICreateSessionUseCase {
  constructor(
    private readonly createSessionValidation: ICreateSessionValidation,
    private readonly findByEmailUserRepository: LoadAccountByEmailRepository,
    private readonly cryptographyProvider: BcryptAdapter,
    private readonly jwtAdapter: JwtAdapter
  ) {}

  async execute(data: ICreateSessionUseCase.Params): Promise<ICreateSessionUseCase.Result> {
    await this.createSessionValidation.validate(data);
    const user = await this.findByEmailUserRepository.loadByEmail(data.email);
    if (!user) {
      throw new AppError({
        code: 'authentication',
        error: 'Usuário não encontrado.',
        message: 'user not found',
        statusCode: 400,
      });
    }
    const pass = user.password as string
    const isValid = await this.cryptographyProvider.compare(data.password, pass);
    if (!isValid) {
      throw new AppError({
        code: 'authentication',
        error: 'Erro nas credenciais.',
        message: 'invalid password',
        statusCode: 400,
      });
    }
    const token = await this.jwtAdapter.encrypt(String(user.id));
    delete user.password
    return { token, user };
  }
}
