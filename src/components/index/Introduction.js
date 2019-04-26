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
  background: url("");
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

const P = styled.p`
  max-width: 550px;
  margin: 0;
  margin-left: 30px;

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
      {/* <Logo /> */}
      <ProfileImg src="/static/img.jpg" />
      <P>
        I'm a <strong>developer</strong> concentrated on{" "}
        <strong>Front-end Engineering with ⚛︎React</strong> and <strong>䷮Wordpress development</strong> currently residing in{" "}
        <strong>Orlando, Fl</strong>. I am currently <strong> available for hire!</strong>
      </P>
    </IntroductionContainer>
  )
}

export default Introduction
