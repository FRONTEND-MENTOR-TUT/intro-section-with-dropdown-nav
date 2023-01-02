import React, { useState } from "react";
import { DropdownStyled, DropdownMenu } from "./style";
import Icon from "../Icon";

import arrowDown from "../../assets/images/icon-arrow-down.svg";
import arrowUp from "../../assets/images/icon-arrow-up.svg";

const Dropdown = ({ text, isOpen = false }) => {
  const [open, toggleOpen] = useState(isOpen);
  return (
    <DropdownStyled onClick={() => toggleOpen((prevState) => !prevState)}>
      {text} <Icon src={open ? arrowUp : arrowDown} iconWidth="10px" />
      <DropdownMenu>
        <li>dropdown menu</li>
      </DropdownMenu>
    </DropdownStyled>
  );
};

export default Dropdown;
