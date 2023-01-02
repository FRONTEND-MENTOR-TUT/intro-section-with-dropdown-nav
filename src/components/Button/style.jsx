import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 15px;
  padding: 14px;
  color: ${({ theme }) => theme.colors.almostWhite};
  background-color: ${({ theme }) => theme.colors.almostBlack};
  outline: none;
  border: 2px solid transparent;
  text-align: center;
  font-size: 18px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "150px"};
  margin: 25px auto;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.almostBlack};
    background-color: ${({ theme }) => theme.colors.almostWhite};
    border: 2px solid ${({ theme }) => theme.colors.almostBlack};
  }
`;

export default ButtonStyled;
