import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  return <Nav fixed={props.fixed}>{props.children}</Nav>;
};

Navbar.propTypes = {
  children: PropTypes.any,
  fixed: PropTypes.bool,
};
