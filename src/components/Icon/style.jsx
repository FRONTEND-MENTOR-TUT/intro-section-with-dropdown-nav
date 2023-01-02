import styled from "styled-components";

const IconStyled = styled.img.attrs((props) => ({
  alt: props.imageAlt,
  src: props.src,
}))`
  width: ${({ iconWidth }) => iconWidth || "30px"};
  height: ${({ iconHeight }) => iconHeight || "auto"};
`;

export default IconStyled;
