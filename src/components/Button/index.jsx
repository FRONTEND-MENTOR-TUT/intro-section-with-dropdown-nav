import React from "react";
import ButtonStyled from "./style";

const Button = ({ children, clickHandler }) => (
  <ButtonStyled onClick={clickHandler}>{children}</ButtonStyled>
);

export default Button;
