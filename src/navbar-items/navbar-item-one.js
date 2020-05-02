import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavbarItem = styled.div.attrs((props) => ({
  className: props.logo ? "app-logo" : "",
}))`
  height: 100%;
  align-items: center;
  padding: 0 20px;
  display: flex ${(props) => (props.logo ? "!important" : "")};
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme?.navbar?.hoverTextColor || "grey"};
    background-color: ${({ theme }) => theme?.navbar?.hoverBackground};
  }
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    display: none;
  }
`;

export const NavbarItemOne = (props) => {
  return (
    <NavbarItem key={props.children} logo={props.logo} style={props.style}>
      {props.children}
    </NavbarItem>
  );
};

NavbarItemOne.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  logo: PropTypes.bool,
};
