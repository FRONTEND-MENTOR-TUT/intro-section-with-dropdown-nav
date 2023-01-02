import styled from "styled-components";
import hamburgerIcon from "../../assets/images/icon-menu.svg";

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;
`;

export const HamburgerIcon = styled.img.attrs((props) => ({
  alt: props.altImage || "hamburger icon",
  src: props.src || hamburgerIcon,
}))`
  width: 100%;
  max-width: 35px;
  margin-top: -8px;
`;
