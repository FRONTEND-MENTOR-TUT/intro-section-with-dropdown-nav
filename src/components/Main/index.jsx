import React from "react";
import MainStyled from "./style";

const Main = ({ flexDirection, children }) => (
  <MainStyled flexDirection={flexDirection}>{children}</MainStyled>
);

export default Main;
