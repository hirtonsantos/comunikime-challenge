import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup
      .string()
      .required("Usuário: Campo obrigatório"),
    email: yup
      .string()
      .email("E-mail invalido")
      .required("E-mail: Campo obrigatório"),
    password: yup
      .string()
      .required("senha: campo obrigatorio"), 
    confirmPassword: yup
      .string()
      .required("Confirmação de senha: Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    role: yup.string()   
  });