import { TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function PopUpCreateProduct({ setPopup }: {setPopup: any}) {
  const formSchema = yup.object().shape({
    name: yup.string().required("Título obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    category: yup.string().required("Categoria obrigatória"),
    price: yup.string(),
    quantity: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { createProduct } = useContext(AuthContext)

  const onSubmitFunction = async (data: any) => {
    await createProduct(data)
    setPopup(false)
  };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Criar Produto</h3>
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Nome"
              variant="outlined"
              {...register("name")}
            />
            <TextField
              margin="normal"
              fullWidth
              type="text"
              id="login-basic"
              label="Preço"
              variant="outlined"
              {...register("price")}
            />
            <TextField
              margin="normal"
              fullWidth
              type="number"
              id="login-basic"
              label="Quantidade"
              variant="outlined"
              {...register("quantity")}
            />
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Descrição"
              variant="outlined"
              {...register("description")}
            />
            <TextField
              margin="normal"
              fullWidth
              id="login-basic"
              label="Categoria"
              variant="outlined"
              {...register("category")}
            />

            <Button type="submit" text={"Adicionar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateProduct;
