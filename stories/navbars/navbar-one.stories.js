import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../static/placeholder-logo.png";

import { Navbar } from "../../src/navbars/navbar-one";
import { NavbarLayoutMulti } from "../../src/navbar-layouts/navbar-layout-multi";
import { NavbarItem } from "../../src/navbar-items/navbar-item-one";
import { BurgerMenu } from "../../src/burger-menus/burger-menu";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-1";
import { MobileMenu } from "../../src/mobile-menus/mobile-menu";
export default {
  title: "Navbars",
};

const NavItemInner = (props) => {
  return <div style={{ textAlign: "center" }}>{props.children}</div>;
};

NavItemInner.propTypes = {
  children: PropTypes.any,
};

const MobileMenuWithContent = ({ isOpen }) => {
  return (
    <MobileMenu isOpen={isOpen}>
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Opportunities</div>
    </MobileMenu>
  );
};

MobileMenuWithContent.propTypes = {
  isOpen: PropTypes.bool,
};

export const ExampleOne = () => {
  const [burgerMenuIsActive, burgerMenuToggleActive] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Navbar fixed>
        <NavbarLayoutMulti
          itemsPosition="left"
          logoPosition="left"
          mobileMenu={<MobileMenuWithContent isOpen={burgerMenuIsActive} />}
          burgerMenu={
            <BurgerMenu
              burgerStyle="spin"
              isActive={burgerMenuIsActive}
              toggleOpen={() => burgerMenuToggleActive(!burgerMenuIsActive)}
            />
          }
          logo={
            <NavbarItem logo>
              <img style={{ height: "40%" }} src={logo} />
            </NavbarItem>
          }
        >
          <NavbarItem key="1">
            <NavItemInner>Home</NavItemInner>
          </NavbarItem>
          <NavbarItem key="2">
            <NavItemInner>About</NavItemInner>
          </NavbarItem>
          <NavbarItem key="3">
            <NavItemInner>Services</NavItemInner>
          </NavbarItem>
          <NavbarItem key="4">
            <NavItemInner>Opportunities</NavItemInner>
          </NavbarItem>
        </NavbarLayoutMulti>
      </Navbar>
    </ThemeProvider>
  );
};
