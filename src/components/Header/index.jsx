import React, { useMemo } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import theme from "../../styles/theme";
import { HeaderStyled, Image } from "./style";

const Header = () => {
  const [width] = useWindowSize();
  const isMobile = useMemo(() => width < theme.breakpoints.mobileNum, [width]);

  return (
    <HeaderStyled>
      <Image isMobile={isMobile} />
    </HeaderStyled>
  );
};

export default Header;
