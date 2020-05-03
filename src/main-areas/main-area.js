import PropTypes from "prop-types";
import styled from "styled-components";

export const MainArea = styled.main`
  position: ${(props) => (props.fixed ? "fixed" : "relative")};
  top: ${({ theme }) => theme?.navbar?.height};
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

MainArea.propTypes = {
  fixed: PropTypes.bool,
};
