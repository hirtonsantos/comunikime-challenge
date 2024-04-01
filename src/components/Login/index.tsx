
'use client'


import { TextField } from "@mui/material";
import { Div, Form, Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Header from "../Header";
import LeafAnimation from "../leafsAnimation";
import Links from "../Links";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

function Login() {
  // const dispatch = useDispatch();

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
    // dispatch(signInThunk(data));
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
        <Links to={"/signup"} label={"Cadastrar-se"}></Links>
      </Div>
    </Container>
  );
}

export default Login;
