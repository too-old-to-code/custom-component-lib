import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../../static/placeholder-logo.png";

import { Navbar } from "../../src/navbars/navbar-one";
import { MainArea } from "../../src/main-areas/main-area";
import { NavbarLayoutMulti } from "../../src/navbar-layouts/navbar-layout-multi";
import { NavbarItem } from "../../src/navbar-items/navbar-item-one";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-1";
import { MobileMenu } from "../../src/mobile-menus/mobile-menu";
import ParallaxImage from "../../src/components/parallax-image";
import { Diagonal } from "../../src/components/diagonal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { SixPack } from "../../src/components/six-pack";

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
        fixed
        style={{
          boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.125)",
          letterSpacing: "1px",
        }}
        burgerMenuStyle="spin"
        burgerMenuIsActive={burgerMenuIsActive}
        toggleMenu={() => burgerMenuToggleActive(!burgerMenuIsActive)}
      >
        <NavbarLayoutMulti
          itemsPosition="right"
          logoPosition="left"
          mobileMenu={<MobileMenuWithContent isOpen={burgerMenuIsActive} />}
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
      <ParallaxImage
        height="90vh"
        staticContent={
          <Diagonal skew="-15">
            <h1>hello</h1>
            <h1>hello</h1>
          </Diagonal>
        }
      />
      <SixPack
        one={<div style={{ background: "yellow", height: "100px" }}>One</div>}
        two={<div>Two</div>}
        three={<div>Three</div>}
        four={<div>Four</div>}
        five={<div>Five</div>}
        six={<div>Six</div>}
      />
      <div>
        <h2>We are proud to be specialists.</h2>
        <p>
          Being 100% focused in Communications and Marketing, Addison has the
          depth of industry knowledge and relationships to deliver the very best
          talent to your organisation. We are undistracted by any other
          discipline and have proven delivery and subject matter expertise
          delivering across these essential customer functions.
        </p>
      </div>
      <ParallaxImage height="90vh" />
      <div>
        <h2>We are proud to be specialists.</h2>
        <p>
          Being 100% focused in Communications and Marketing, Addison has the
          depth of industry knowledge and relationships to deliver the very best
          talent to your organisation. We are undistracted by any other
          discipline and have proven delivery and subject matter expertise
          delivering across these essential customer functions.
        </p>
      </div>
      <ParallaxImage height="90vh" />
      <MainArea fixed></MainArea>
    </ThemeProvider>
  );
};
