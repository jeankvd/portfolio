import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Container, FadeInTop, P } from "../general/GeneralStyles"
import FadeInTopContainer from "../general/FadeInTopContainer"

const IntroductionContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

const ProfileImg = styled.img`
  height: 180px;
  width: 200px;
  /* background: #8bcaf0; */
  object-fit: contain;
  border-radius: 50%;
  /* border-left: solid 1px black; */
  margin-bottom: 0px;
`

const IntroP = styled(P)`
  max-width: 550px;
  margin: 0;
  margin-left: 30px;
  color: #374a54;
  font-size: 1.25rem;
  line-height: 3rem;
  font-weight: 400;

  @media (max-width: 850px) {
    margin-left: 0px;
  }
`

const Introduction = props => {
  return (
    <IntroductionContainer>
      {/* <Logo /> */}
      {/* <FadeInTopContainer range={150} offset={-275}> */}
        <ProfileImg src="/static/img.jpg" />
      {/* </FadeInTopContainer> */}
      {/* <FadeInTopContainer range={150} offset={-275}> */}
        <IntroP>
          I'm a <strong>developer</strong> concentrated on{" "}
          <strong>Front-end Engineering with ⓋVue, ⚛︎React,</strong> and{" "}
          <strong>䷮Wordpress development</strong> currently residing in{" "}
          <strong>Orlando, Fl</strong>. I am currently{" "}
          <strong> available for hire!</strong>
        </IntroP>
      {/* </FadeInTopContainer> */}
    </IntroductionContainer>
  )
}

export default Introduction
