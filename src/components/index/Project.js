import React, { useEffect } from "react"
import styled from "styled-components"
import Tilt from "react-vanilla-tilt"
import { P } from "../general/GeneralStyles"

const StyledProject = styled.div`
  width: 100% !important;
  transition: border ease-in-out 0.4s;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  text-align: left;
  margin-bottom: 30px;
  color: #fff;
  /* background: linear-gradient(135deg, #ff00ba 0%, #fae713 100%)!important; */

  &:hover {
    /* border: solid 5px black; */
  }

  > img {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 75%;
    margin: 0 auto;
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

const Project = props => {
  return (
    <StyledProject
      options={{ scale: 2, max: 25, width: 100 }}
      reverse={props.reverse}
    >
      {props.reverse ? (
        <img src="https://jeankvd.github.io/img/wolf.gif" alt="" />
      ) : null}
      <div>
        <h1>{props.project.title}</h1>
        <span>{props.project.tag}</span>
        <P>{props.project.description}</P>
        <a href="#">Visit the Site</a>
      </div>
      {!props.reverse ? (
        <img src="https://jeankvd.github.io/img/wolf.gif" alt="" />
      ) : null}
    </StyledProject>
  )
}

export default Project
