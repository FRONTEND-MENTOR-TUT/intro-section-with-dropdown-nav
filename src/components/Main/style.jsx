import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  padding: 10px;
`;

export default MainStyled;
