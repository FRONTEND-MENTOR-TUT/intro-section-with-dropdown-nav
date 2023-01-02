import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import Logo from "../Logo";
import SideBar from "../Sidebar";
import SidebarContent from "../SidebarContent";
import { NavigationStyled, HamburgerIcon } from "./style";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [width] = useWindowSize();

  return (
    <NavigationStyled>
      <Logo />
      {width < 600 ? (
        <>
          <HamburgerIcon
            onClick={() => setShowSidebar((prevState) => !prevState)}
          />
          <SideBar
            show={showSidebar}
            screenWidth={width}
            setShow={setShowSidebar}
            content={<SidebarContent />}
          />
        </>
      ) : (
        <div>desktop</div>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
