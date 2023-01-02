import styled, { css } from "styled-components";
import close from "../../assets/images/icon-close-menu.svg";

const transitionStyle = css`
  transform: translateX(0px);
  transition: transform 0.4s ease-in-out;
`;

export const SidebarStyled = styled.aside`
  position: fixed;
  transform: ${({ show, moveFor }) =>
    show ? transitionStyle : "translateX(" + moveFor + ")"};
  z-index: 1000;
  transition: transform 300ms ease-in;
  width: 65%;
  top: 0;
  left: 35%;
  background-color: ${({ theme }) => theme.colors.almostWhite};
  height: 100vh;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 15px;
`;

export const Close = styled.div`
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
`;
