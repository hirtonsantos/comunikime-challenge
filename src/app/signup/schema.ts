import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup
      .string()
      .required("Usuário: Campo obrigatório")
      .matches(
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
        "Minimo 5 caracteres;Sem espaço;Deve começar com uma letra;Pode ter . - _;Não pode começar nem terminar com . - _"
      ),
    email: yup
      .string()
      .email("E-mail invalido")
      .required("E-mail: Campo obrigatório"),
    password: yup
      .string()
      .required("senha: campo obrigatorio"), 
    role: yup.string()   
  });