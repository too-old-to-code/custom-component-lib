import "./burger-menu.scss";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Menu = styled.button.attrs(({ isActive, burgerStyle }) => ({
  className: `hamburger hamburger--${burgerStyle || "spin"} ${
    isActive ? "is-active" : ""
  } sidebar-menu`,
  type: "button",
}))`
  z-index: 200 !important;
  position: fixed;
  ${({ theme }) => `${theme?.hamburger?.position}: 0;` || "left: 0;"}
  min-height: ${({ theme }) => theme?.navbar?.height || "54px"};
  @media (min-width: ${({ theme }) => theme?.breakpoints?.minDesktop}) {
    display: none !important;
  }
`;

export const BurgerMenu = (props) => {
  return (
    <Menu
      onClick={props.toggleOpen}
      isActive={props.isActive}
      burgerStyle={props.burgerStyle}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Menu>
  );
};

BurgerMenu.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  burgerStyle: PropTypes.string,
};
