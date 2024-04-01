import * as yup from "yup";
import api from "../../Services/api";
import LeafAnimation from "../../Components/leafsAnimation";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { TextField } from "@mui/material";
import { Container, Error, Div } from "./style";
import Links from "../../Components/Links";

function Signup() {
  const history = useHistory();
  const schema = yup.object().shape({
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
      .required("senha: campo obrigatorio")
      .matches(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
        "Mínimo 8 dígitos;Pelo menos um número;Pelo menos uma letra maiúscula;Pelo menos uma letra minúscula;Um caractere especial"
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não coincidem")
      .required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    delete data.confirmPassword;
    api
      .post("users/", data)
      .then((res) => {
        console.log({res})
        history.push("/login");
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log({err});
      });
  };
  return (
    <Container>
      <LeafAnimation />
      <Div>
        <Header />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            {...register("username")}
            margin="normal"
            fullWidth
            label="Usuário"
            variant="outlined"
            error={errors.username?.message}
          />

          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            label="E-mail"
            variant="outlined"
            error={errors.email?.message}
          />
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            error={errors.password?.message}
          />
          <Error>
            {errors.password?.message.split(";").length > 1 &&
              errors.password?.message
                .split(";")
                .map((item, index) => <li key={index}>{item}</li>)}
          </Error>
          <TextField
            {...register("confirmPassword")}
            margin="normal"
            fullWidth
            label="Confirmar senha"
            type="password"
            variant="outlined"
            error={errors.confirmPassword?.message}
          />
          <Button color="#fff" text="Registrar" type="submit"></Button>
          <Links to="/login" label="Ir para o login"></Links>
        </form>
      </Div>
    </Container>
  );
}

export default Signup;
