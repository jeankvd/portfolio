import React from "react"
import styled, { keyframes } from "styled-components"

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

const HeroWave = props => {
  return (
    <HeroWave>
      <Box>
        <Wave1 />
        <Wave2 />
        <Wave />
      </Box>
    </HeroWave>
  )
}

export default HeroWave
