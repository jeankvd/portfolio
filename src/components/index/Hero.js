import React from "react"
import styled, { keyframes } from "styled-components"

/* WAVE STYLES */
const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`

const Box = styled.div`
  width: 800px;
  height: 300px;
  height: 600px;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: lighten(#f0f4c3, 10%);
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0) /* rotate(135deg) */;

  &::after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(#e8a, 1),
      rgba(#def, 0) 80%,
      rgba(white, 0.5)
    );
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
`

const Wave = styled.div`
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  width: 900px;
  height: 900px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: ${drift} 3000ms infinite linear;
`

const Wave1 = styled(Wave)`
  animation: ${drift} 5000ms infinite linear;
`

const Wave2 = styled(Wave)`
  animation: ${drift} 7000ms infinite linear;
  opacity: 0.1;
  background: yellow;
`
/* END WAVE STYLES */

const WaveContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  /* background: (top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);  */
  /* background: #000; */

  img {
      max-width: 50px;
  }
`

const Container = styled.div`
  background: #fff;
  width: 100vw;
  margin-bottom: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const HeroText = styled.div`
  h1 {
    color: ${props => props.theme.textPrimaryColor};
    font-size: 3rem;
    line-height: 4.5rem;
    margin: 0 0 1.45rem;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt", "kern";
  }
`

const Hero = props => {
  return (
    <Container>
      <HeroText>
        <h1>
          Hey, I'm Jean 🤖🙋🏻‍♂️ <br />
          Developer, thinker, <br />
          {"&"} maker 👨‍💻💭.
        </h1>
      </HeroText>
      <WaveContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          alt=""
        />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png" alt="" />
        <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="" />
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.pnghttps://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
        <Box>
          <Wave1 />
          <Wave2 />
          <Wave />
        </Box>
      </WaveContainer>
    </Container>
  )
}

export default Hero
