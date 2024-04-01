import { AccountModel } from "../models/account";

export interface ICreateSessionUseCase {
  execute: (data: ICreateSessionUseCase.Params) => Promise<ICreateSessionUseCase.Result>;
}

export namespace ICreateSessionUseCase {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    token: string;
    user: Omit<AccountModel, 'password'>;
  };
}
