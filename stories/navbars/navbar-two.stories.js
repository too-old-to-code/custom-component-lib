import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../../static/logo.png";

import { Navbar } from "../../src/navbars/navbar-one";
import { NavbarLayoutMulti } from "../../src/navbar-layouts/navbar-layout-multi";
import { NavbarItem } from "../../src/navbar-items/navbar-item-one";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-2";
import { MobileMenu } from "../../src/mobile-menus/mobile-menu";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
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

export const ExampleTwo = () => {
  const [burgerMenuIsActive, burgerMenuToggleActive] = useState(false);
  const openMenu = useRef();

  // Close the mobile menu if the screen is resized while the menu is open
  useEffect(() => {
    const handleResize = () => burgerMenuToggleActive(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // ensure the main screen can't be scrolled when the menu is open
  useEffect(() => {
    let targetElement = openMenu;
    if (burgerMenuIsActive) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [burgerMenuIsActive]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        // fixed
        style={{
          fontFamily: "Open Sans",
        }}
        burgerMenuStyle="spin"
        burgerMenuIsActive={burgerMenuIsActive}
        toggleMenu={() => burgerMenuToggleActive(!burgerMenuIsActive)}
      >
        <NavbarLayoutMulti
          itemsPosition="center"
          logoPosition="left"
          mobileMenu={<MobileMenuWithContent isOpen={burgerMenuIsActive} />}
          logo={
            <NavbarItem logo>
              <img style={{ height: "30%" }} src={logo} />
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
          <NavbarItem key="5">
            <NavItemInner>
              <input
                type="text"
                placeholder="Search..."
                style={{ height: "30px" }}
              />
            </NavItemInner>
          </NavbarItem>
        </NavbarLayoutMulti>
      </Navbar>
      <div
        style={{
          // position: "fixed",
          top: "55px",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "auto",
        }}
      >
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    </ThemeProvider>
  );
};
