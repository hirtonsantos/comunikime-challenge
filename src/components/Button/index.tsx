import React from "react";
import { ButtonStyled } from "./style";

interface ButtonProps {
  onclick?: () => void;
  type?: "button" | "reset" | "submit";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onclick = () => {}, type = "button", text }) => {
  return (
    <ButtonStyled onClick={onclick} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
