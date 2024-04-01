'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NativeSelect, TextField } from "@mui/material";
import { Container, Error, Div } from "./style";
import LeafAnimation from "@/components/leafsAnimation";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Links from "@/components/Links";
import { schema } from "./schema";

function Signup() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: any) => {
    delete data.confirmPassword;
    console.log({data})
    /*
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
    */
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
            // error={errors.username?.message}
          />

          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            label="E-mail"
            variant="outlined"
            // error={errors.email?.message}
          />
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            // error={errors.password?.message}
          />
          <TextField
            {...register("role")}
            margin="normal"
            fullWidth
            label="Confirmar senha"
            type="text"
            variant="outlined"
            // error={errors.confirmPassword?.message}
          />
          <NativeSelect
              {...register("role")}
              fullWidth
              defaultValue={"CUSTOMER"}
              id="select"
            >
              <option defaultValue={"CUSTOMER"}>
                CUSTOMER
              </option>
              <option defaultValue={"ADMINISTRATOR"}>
                ADMINISTRATOR
              </option>
          </NativeSelect>
          <Button text="Registrar" type="submit"></Button>
          <Links to="/login" label="Ir para o login"></Links>
        </form>
      </Div>
    </Container>
  );
}

export default Signup;
