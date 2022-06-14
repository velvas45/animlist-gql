import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavWrapper,
  NavLinks,
  NavLink,
  LogoContainer,
  CloseIcon,
  NavMenu,
  OpenIcon,
} from "./navigation.styles";

import { AiFillAppstore, AiOutlineCloseCircle } from "react-icons/ai";

const Navigation = () => {
  const [navToggle, setNavToggle] = useState(false);

  // function toggle
  const handleToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <NavigationContainer>
        <NavWrapper>
          <LogoContainer to="/">MYNIME</LogoContainer>
          <NavMenu active={navToggle}>
            <NavLinks>
              <NavLink to="/" onClick={handleToggle}>
                Home
              </NavLink>
              <NavLink to="/my-collection" onClick={handleToggle}>
                Collection
              </NavLink>
            </NavLinks>
            <CloseIcon>
              <AiOutlineCloseCircle onClick={handleToggle} />
            </CloseIcon>
          </NavMenu>
          <OpenIcon onClick={handleToggle}>
            <AiFillAppstore />
          </OpenIcon>
        </NavWrapper>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
