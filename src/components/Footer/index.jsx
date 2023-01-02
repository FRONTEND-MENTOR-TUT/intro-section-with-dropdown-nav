import React, { useMemo } from "react";
import FooterStyled from "./style";
import Icon from "../Icon";
import audiophile from "../../assets/images/client-audiophile.svg";
import databiz from "../../assets/images/client-databiz.svg";
import maker from "../../assets/images/client-maker.svg";
import meet from "../../assets/images/client-meet.svg";

const Footer = () => {
  const footerItems = useMemo(
    () => [
      { key: "databiz", src: databiz, alt: "databiz", iconWidth: "80px" },
      {
        key: "audiophile",
        src: audiophile,
        alt: "audiophile",
        iconWidth: "55px",
      },
      { key: "meet", src: meet, alt: "meet", iconWidth: "68px" },
      { key: "maker", src: maker, alt: "maker", iconWidth: "70px" },
    ],
    [audiophile, databiz, maker, meet]
  );
  return (
    <FooterStyled>
      {footerItems.map((item) => (
        <Icon {...{ ...item }} />
      ))}
    </FooterStyled>
  );
};

export default Footer;
