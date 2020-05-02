import React from "react";
// import logo from "../../static/bulb.png";
import logo from "../../static/placeholder-logo.png";

import { Navbar } from "../../src/navbars/navbar-one";
import { NavbarLayoutMulti } from "../../src/navbar-layouts/navbar-layout-multi";
import { NavbarItemOne } from "../../src/navbar-items/navbar-item-one";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-1";

export default {
  title: "Navbars2",
};

export const Standard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar fixed>
        <NavbarLayoutMulti
          itemsPosition="right"
          logoPosition="left"
          logo={
            <NavbarItemOne logo>
              <img style={{ height: "40%" }} src={logo} />
            </NavbarItemOne>
          }
        >
          <NavbarItemOne key="1">
            <div>Home</div>
          </NavbarItemOne>
          <NavbarItemOne key="2">About</NavbarItemOne>
          <NavbarItemOne key="3">Services</NavbarItemOne>
          <NavbarItemOne key="4">Opportunities</NavbarItemOne>
        </NavbarLayoutMulti>
      </Navbar>
    </ThemeProvider>
  );
};
