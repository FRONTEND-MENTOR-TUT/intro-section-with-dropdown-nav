import styled from "styled-components";
import mobileImg from "../../assets/images/image-hero-mobile.png";
import desktopImg from "../../assets/images/image-hero-desktop.png";

export const HeaderStyled = styled.header`
  display: flex;
  margin-bottom: 10px;
`;

export const Image = styled.img.attrs((props) => ({
  alt: props.imageAlt,
  src: props.isMobile ? mobileImg : desktopImg,
}))`
  display: flex;
  width: 100%;
`;
