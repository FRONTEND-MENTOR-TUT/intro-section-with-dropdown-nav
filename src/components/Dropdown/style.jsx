import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
  perspective: 1000px;
  z-index: 100;
  cursor: pointer;

  &:hover {
    display: block;
  }
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  perspective: 1000px;
  z-index: -1;

  li {
    display: block;
    color: #fff;
    background-color: #34495e;
    padding: 10px 20px;
    font-size: 16px;
    opacity: 1;
  }

  animation: growOut 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growOut {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    display: block;
    li {
      display: block;
      opacity: 1;
    }
  }
`;

// Menu as a whole animated
/*.dropdown:hover .dropdown_menu--animated
    display: block
.dropdown_menu--animated
    display: none
    li
      display: block
      opacity: 1*/
