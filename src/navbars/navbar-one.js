import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BurgerMenu } from "../burger-menus/burger-menu";

const Nav = styled.nav`
  z-index: 75;
  font-family: sans-serif;
  width: 100%;
  top: 0;
  left: 0;
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  background: ${({ theme }) => theme?.navbar?.background || "#3b3939"};
  color: ${({ theme }) => theme?.navbar?.textColor || "grey"};
  height: ${({ theme }) => theme?.navbar?.height || "54px"};
`;
// display: flex;
// justify-content: ${(props) => (props.center ? "center" : "space-between")};

export const Navbar = (props) => {
  console.log(props);
  return (
    <Nav fixed={props.fixed} style={props.style}>
      <BurgerMenu
        fixed={props.fixed}
        burgerStyle={props.burgerMenuStyle}
        isActive={props.burgerMenuIsActive}
        toggleOpen={props.toggleMenu}
      />
      {props.children}
    </Nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.any,
  fixed: PropTypes.bool,
  burgerMenuIsActive: PropTypes.bool,
  burgerMenuStyle: PropTypes.string,
  toggleMenu: PropTypes.any,
  style: PropTypes.any,
};
