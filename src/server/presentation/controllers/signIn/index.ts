import { CreateSessionValidation } from "@/server/infra/validations/auth/create-session.validation";
import { InvalidEmailError, MissingParamError } from "./errors";
import { badRequestError, internalServerError, ok } from "./helpers";
import { Controller, HttpRequest, HttpResponse } from "./protocols";
import { LoadAccountByEmailRepository } from "@/server/data/protocols/load-account-by-email-repository";
import { BcryptAdapter } from "@/server/infra/criptography/bcrypt-adapter";
import { JwtAdapter } from "@/server/infra/criptography/jwt-adapter";
import { CreateSessionUseCase } from "@/server/usecases/authentication";

export class SigninController implements Controller {
  constructor(
    private readonly createSessionValidation: CreateSessionValidation,
    private readonly findUserByEmailRepository: LoadAccountByEmailRepository,
    private readonly cryptographyProvider: BcryptAdapter,
    private readonly jwtProvider: JwtAdapter,
    private readonly createSessionUseCase: CreateSessionUseCase
  ) {}

  async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;

      if (!email || !password) {
        return badRequestError(new MissingParamError('email or password'));
      }

      const user = await this.findUserByEmailRepository.loadByEmail(email);

      if (!user) {
        return badRequestError(new InvalidEmailError());
      }

      const pass = user?.password as string
      const isValidPassword = await this.cryptographyProvider.compare(password, pass);

      
      if (!isValidPassword) {
        return badRequestError(new InvalidEmailError());
      }
      

      const token = await this.jwtProvider.encrypt(String(user.id));

      return ok({ token, user });
    } catch (error) {
      console.error('Error in SigninController:', error);
      return internalServerError();
    }
  }
}