import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BurgerMenu } from "../burger-menu/burger-menu";

const RIGHT = "right";
const LEFT = "left";
const CENTER = "center";

const NavbarInnerWrapper = styled.nav`
  height: 100%;
  display: flex;
  position: relative;
  @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
    margin-left: 55px; // width of burger menu
  }
`;

const Items = styled.div`
  .app-logo & {
    display: flex !important;
  }
  height: 100%;
  display: ${(props) => (props.alwaysShow ? "flex !important" : "flex")};
  align-items: center;
  ${(props) => {
    if (props.position === RIGHT) {
      return `
        position: absolute;
        right: 0;
      `;
    } else if (props.position === LEFT) {
      return `
        position: absolute;
        left: 0;
      `;
    } else if (props.position === CENTER) {
      return `
        justify-content: center;
        width: 100%;
      `;
    }
  }}
  // @media (max-width: ${({ theme }) => theme?.breakpoints?.maxMobile}) {
  //   display: none;
  // }
`;

function centerLogo(items, logo) {
  const midElement = Math.floor(items.length / 2);
  return [items.slice(0, midElement), logo, items.slice(midElement)];
}

export const NavbarLayoutMulti = (props) => {
  return (
    <NavbarInnerWrapper>
      <BurgerMenu />
      {props.itemsPosition === props.logoPosition ? (
        <Items position={props.logoPosition}>
          {props.logoPosition === LEFT
            ? [props.logo, props.children]
            : props.logoPosition === RIGHT
            ? [props.children, props.logo]
            : centerLogo(props.children, props.logo)}
        </Items>
      ) : (
        <React.Fragment>
          <Items alwaysShow key="logo" position={props.logoPosition}>
            {props.logo}
          </Items>
          <Items key="items" position={props.itemsPosition}>
            {props.children}
          </Items>
        </React.Fragment>
      )}
    </NavbarInnerWrapper>
  );
};

NavbarLayoutMulti.propTypes = {
  children: PropTypes.any,
  logo: PropTypes.any,
  itemsPosition: PropTypes.oneOf([RIGHT, CENTER, LEFT]),
  logoPosition: PropTypes.oneOf([RIGHT, CENTER, LEFT]),
};

NavbarLayoutMulti.defaultProps = {
  itemsPosition: RIGHT,
  logoPosition: LEFT,
};
