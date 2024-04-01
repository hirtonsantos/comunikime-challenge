export interface ICreateSessionValidation {
  validate: (data: ICreateSessionValidation.Params) => Promise<void>;
}

export namespace ICreateSessionValidation {
  export type Params = {
    email: string;
    password: string;
  };
}
