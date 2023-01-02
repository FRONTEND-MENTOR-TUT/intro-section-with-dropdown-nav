import React from "react";
import { SidebarStyled, CloseContainer, Close } from "./style";

const SideBar = ({ show, setShow, screenWidth, content }) => {
  const moveFor = screenWidth * 0.65 + "px";
  return (
    <SidebarStyled show={show} moveFor={moveFor}>
      <CloseContainer>
        <Close onClick={() => setShow(false)} />
      </CloseContainer>
      {content}
    </SidebarStyled>
  );
};

export default SideBar;
