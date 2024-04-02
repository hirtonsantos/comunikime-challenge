'use client'

import Button from "@/components/Button";
import Header from "@/components/Header";
import Links from "@/components/Links";
import LeafAnimation from "@/components/leafsAnimation";
import { AuthContext } from "@/contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { NativeSelect, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { Container, Div } from "./style";

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    resolver: yupResolver(schema),
    defaultValues: {
      role: "ADMINISTRATOR"
    }
  });

  const { registerAccount } = useContext(AuthContext)

  const onSubmitFunction = async (data: any) => {
    await registerAccount(data)
  };

  return (
    <Container>
      <LeafAnimation />
      <Div>
        <Header />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            {...register("name")}
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
            {...register("confirmPassword")}
            margin="normal"
            fullWidth
            label="Confirmar senha"
            type="password"
            variant="outlined"
            error={!!errors?.confirmPassword?.message}
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
