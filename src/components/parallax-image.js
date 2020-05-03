import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ParallaxStyled = styled.div`
  // .section {
  //   padding: 20px;
  //   color: aliceblue;
  //   min-height: 100px;
  //   overflow: hidden;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-family: futura-pt;
  //   background-color: #3559cc;
  //   flex-direction: column;
  // }
  position: relative;
  overflow: hidden;
  .parallax {
    // height: 500px;
    height: 90vh;
    position: relative;
    overflow: hidden;
    div {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
    }

    .image-wrapper,
    img {
      width: 100%;
      height: 130%;
      // opacity: 0.5;

      img {
        object-fit: cover;
      }
    }
    h2 {
      position: absolute;
      left: 200px;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;

// const Diagonal = styled.div`
//   // width: 50%;
//   // padding: 10% 30% 10em 10%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   // background-color: white;
//   background: rgba(255, 255, 255, 0.7);
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 50%;
//   min-width: 80%;
//   border-left: 30px solid #e0e0e0;

//   padding-left: 7%;
//   // opacity: 0.7;
//   z-index: 1;
//   transform: skew(-20deg);
// `;

// <Tween
//   position="-=1"
//   from={{ top: "40%", scale: 0.2 }}
//   to={{ top: "40%", scale: 1.6 }}
// >
// </Tween>

// <Diagonal>
//   <div
//     style={{
//       transform: "skew(20deg)",
//       width: "50%",
//     }}
//   >
//     <h1>This is some text</h1>
//     <p>
//       We can imagine some stuff here for the sake of reading. Lorem ipsum
//       dolor sit amet, consectetur adipisicing elit. Autem, impedit.
//     </p>
//     <button>Submit</button>
//   </div>
// </Diagonal>

export const ParallaxImage = (props) => (
  <ParallaxStyled>
    {props.staticContent}
    <Controller>
      <Scene duration="300%" triggerHook="onEnter">
        <Timeline
          wrapper={
            <div className="parallax" style={{ height: props.height }} />
          }
        >
          <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
            <div className="image-wrapper">
              <img src="https://placeimg.com/1000/1000/nature" alt="" />
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </ParallaxStyled>
);

ParallaxImage.propTypes = {
  height: PropTypes.string,
  staticContent: PropTypes.any,
};

