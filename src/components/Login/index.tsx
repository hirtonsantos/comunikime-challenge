
'use client'


import { AuthContext } from "@/contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../Button";
import Header from "../Header";
import Links from "../Links";
import LeafAnimation from "../leafsAnimation";
import { Container, Div, Form } from "./style";

function Login() {

  const formSchema = yup.object().shape({
    email: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { signIn } = useContext(AuthContext)

  const onSubmitFunction = (data: any) => {
    console.log({data})
    console.log('ola gente')
    signIn(data)
  };

  return (
    <Container>
      <LeafAnimation />
      <Div>
        <Header></Header>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            margin="normal"
            fullWidth
            id="login-basic"
            label="Usuário"
            variant="outlined"
            error={!!errors.email?.message}
            {...register("email")}
          />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            id="password-basic"
            label="Senha"
            error={!!errors.password?.message}
            variant="outlined"
            {...register("password")}
          />
          <Button type="submit" text={"Entrar"} />
        </Form>
        <Links to={"/register"} label={"Cadastrar-se"}></Links>
      </Div>
    </Container>
  );
}

export default Login;
