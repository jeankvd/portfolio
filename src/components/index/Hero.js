import React from "react"
import styled, { keyframes } from "styled-components"
import { Container, H1 } from "../general/GeneralStyles"

/* WAVE STYLES */
const drift = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`

const Box = styled.div`
  width: 800px;
  height: 300px;
  height: 600px;
  box-shadow: 0 2px 30px rgba(black, 0.2);
  background: lighten(#f0f4c3, 10%);
  position: relative;
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
  width: 1050px;
  height: 1050px;
  margin-left: -300px;
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
  position: relative;
  z-index: 100;

  @media (max-width: 1420px) {
    max-width: 700px;
  }

  @media (max-width: 1310px) {
    max-width: 600px;
  }

  @media (max-width: 700px) {
    transform: translate(-10%);
  }

  @media (max-width: 600px) {
    transform: translate(-40%);

  }


  img {
    /* max-width: 100px; */
    max-width: 400px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;

    @media (max-width: 1140px) {
      display: none;
    }
  }
`

const StyledContainer = styled(Container)`
  background: #fff;
  /* overflow-y: hidden; */
  display: flex;
  align-items: center;
`

const HeroText = styled.div`
  min-width: 460px;
  z-index: 1;

  @media (max-width: 1140px) {
    min-width: 500px;
  }

  @media (max-width: 500px) {
    /* min-width: 100%; */
  }


`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`
const Hero = props => {
  return (
    <Wrapper>
      <StyledContainer>
        <HeroText>
          <H1>
            Hey, I'm Jean 🌊🙋🏻‍♂️ <br />
            Developer, thinker, <br />
            {"&"} creator 👨‍💻💭.
          </H1>
        </HeroText>
        <WaveContainer>
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/code_review_l1q9.svg"
            alt=""
          />
          <Box>
            <Wave1 />
            <Wave2 />
            <Wave />
          </Box>
        </WaveContainer>
      </StyledContainer>
    </Wrapper>
  )
}

export default Hero
