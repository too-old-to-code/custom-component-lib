import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const ParallaxStyled = styled.div`
  .section {
    padding: 20px;
    color: aliceblue;
    min-height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: futura-pt;
    background-color: #3559cc;
    flex-direction: column;
  }

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
      opacity: 0.5;

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

export const Parallax = () => (
  <ParallaxStyled>
    <Controller>
      <Scene duration="300%" triggerHook="onEnter">
        <Timeline wrapper={<div className="parallax " />}>
          <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
            <div className="image-wrapper">
              <img src="https://placeimg.com/1000/1000/nature" alt="" />
            </div>
          </Tween>
          <Tween
            position="-=1"
            from={{ top: "40%", scale: 0.2 }}
            to={{ top: "40%", scale: 1.6 }}
          >
            <div>
              <h1>hello shit</h1>
            </div>
          </Tween>
        </Timeline>
      </Scene>
      <div className="section is-family-primary">
        <h3>Section title</h3>
        <div>Section text</div>
      </div>
    </Controller>

    <Controller>
      <Scene duration="300%" triggerHook="onEnter">
        <Timeline wrapper={<div className="parallax " />}>
          <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
            <div className="image-wrapper">
              <img src="https://placeimg.com/1000/1000/nature" alt="" />
            </div>
          </Tween>
          <Tween
            position="-=1"
            from={{ top: "40%", scale: 0.2 }}
            to={{ top: "40%", scale: 1.6 }}
          >
            <div>
              <h1 className="test">hello</h1>
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <div className="section is-family-primary">
      <h3 className="is-4 is-size-5-mobile title has-text-light">
        Section title
      </h3>
      <div className="section-text has-text-justified">Section text</div>
    </div>

    <Controller>
      <Scene duration="300%" triggerHook="onEnter">
        <Timeline wrapper={<div className="parallax " />}>
          <Tween from={{ yPercent: -30 }} to={{ yPercent: 0 }}>
            <div className="image-wrapper">
              <img src="https://placeimg.com/1000/1000/animals" alt="" />
            </div>
          </Tween>
          <Tween
            position="-=1"
            from={{ top: "40%", scale: 0.7 }}
            to={{ top: "40%", scale: 1 }}
          >
            <div>
              <h1>hello</h1>
            </div>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <div className="section is-family-primary">
      <h3 className="is-4 is-size-5-mobile title has-text-light">
        Section title
      </h3>
      <div className="section-text has-text-justified">Section text</div>
    </div>
  </ParallaxStyled>
);

