import React from "react";
import { Navbar } from "../../src/navbars/navbar-two";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-1";
//
//
//
// const theme = {
//   breakpoints: {
//     mobile: "767px",
//     desktop: "768px",
//   },
// };

export default {
  title: "Navbars",
};

export const StandardTwo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>And other</Navbar>
    </ThemeProvider>
  );
};
