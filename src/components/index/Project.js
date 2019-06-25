import React, { useEffect } from "react"
import styled from "styled-components"
import Tilt from "react-vanilla-tilt"
import { P } from "../general/GeneralStyles"

const StyledProject = styled.div`
  width: 100% !important;
  transition: border ease-in-out 0.4s;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  text-align: left;
  margin-bottom: 30px;
  color: #fff;

  &.reversed img:nth-of-type(2) {
    display: none;
  }

  &:not(.reversed) img:nth-of-type(1) {
    display: none;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    width: 700px!important;
    max-width: 95vw;
    margin: 0 auto;

    &:not(.reversed) img:nth-of-type(1) {
      display: block;
    }

    &:not(.reversed) img:nth-of-type(2) {
      display: none;
    }
  }

  > img {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 75%;
    margin: 0 auto;

    @media (max-width: 950px) {
      width: 100%;
      margin: 0 auto;
    }

    &.reverse {
      display: none;
    }
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 0px;
    color: white;
  }

  ${P} {
    max-width: 500px;
  }

  a {
    text-shadow: none;
    background: #8bcaf0;
    color: #fff;
    padding: 15px 30px;
    display: inline-block;
    border-radius: 4px;
    box-shadow: none;
    transition: transform 0.2s ease-out 0s;

    &:hover {
      transform: translate3d(0, -5px, 0);
    }
  }
`

const ProjectContainer = styled.div`

`

const Project = props => {
  return (
    <StyledProject
      options={{ scale: 2, max: 25, width: 100 }}
      reverse={props.reverse}
      className={props.reverse ? "reversed" : null}
    >
      <img src={props.project.img} alt="" />
      <ProjectContainer>
        <h1>{props.project.title}</h1>
        <span>{props.project.tag}</span>
        <P>{props.project.description}</P>
        {props.project.link ? (
          <a href={props.project.link}>Visit the Site</a>
        ) : null}
      </ProjectContainer>
      <img src={props.project.img} alt="" />
    </StyledProject>
  )
}

export default Project
