import React from "react"
import styled from "styled-components"
import { Container } from "../general/GeneralStyles"

const IntroductionContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 50px;
`

const Logo = styled.div`
  height: 180px;
  width: 200px;
  background: #8BCAF0;
`

const P = styled.p`
  max-width: 500px;
  margin: 0;
  margin-left: 80px;

  font-size: 1.25rem;
  line-height: 3rem;
  color: #374a54;
  font-family: Heebo, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt", "kern";
`

const Introduction = props => {
  return (
    <IntroductionContainer>
      <Logo />
      <P>
        I'm a <strong>developer</strong> and{" "}
        <strong>full stack engineer</strong> currently residing in{" "}
        <strong>Orlando, Fl</strong>. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium sapiente
      </P>
    </IntroductionContainer>
  )
}

export default Introduction
