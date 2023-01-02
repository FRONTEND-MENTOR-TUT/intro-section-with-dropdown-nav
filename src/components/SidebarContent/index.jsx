import React from "react";
import { navigationItems } from "../../constants";
import { SidebarContentStyled, NavItemContainer } from "./style";
import Dropdown from "../Dropdown";
import { Ul, A } from "../Typography";

const SidebarContent = () => (
  <SidebarContentStyled>
    <Ul>
      {navigationItems.map(({ id, category, subCategories }) => {
        if (!subCategories) {
          return (
            <NavItemContainer key={id}>
              <li>
                <A href="#">{category}</A>
              </li>
            </NavItemContainer>
          );
        }
        return (
          <NavItemContainer key={id}>
            <li>
              <Dropdown text={category} />
            </li>
          </NavItemContainer>
        );
      })}
    </Ul>
  </SidebarContentStyled>
);

export default SidebarContent;
