import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin: 24px 0;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const Ul = styled.ul`
  list-style: none;
  li {
    color: ${({ theme }) => theme.colors.mediumGray};
  }
`;

export const A = styled.a`
  text-decoration: none;
  display: block;
  color: ${({ theme }) => theme.colors.mediumGray};
`;
