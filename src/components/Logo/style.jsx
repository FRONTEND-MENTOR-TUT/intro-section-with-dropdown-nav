import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const LogoStyled = styled.img.attrs((props) => ({
  alt: props.altText || "logo image",
  src: props.src || logo,
}))`
  width: 100%;
  max-width: 85px;
`;
