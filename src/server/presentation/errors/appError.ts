interface IProps {
  message: string;
  code: string;
  statusCode: number;
  error: string;
  stack?: string;
}

export class AppError extends Error {
  public props: IProps;

  constructor({ code = 'generic', message = 'Erro inesperado!', error, stack, statusCode = 500 }: IProps) {
    super(message);
    this.props = { code, message, error, stack, statusCode };
  }
}
