import React from "react"
import styled, { keyframes } from "styled-components"
import { Container } from "../general/GeneralStyles"
import Project from "./Project"

const Wrapper = styled.div`
  background: #182f4a;
  padding: 80px 0px 40px 0px;
`

const waveAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1601px 0;
  }
`

const ProjectsContainer = styled(Container)`
  position: relative;

  &::before,
  &::after {
    content: "";
    background: url("http://www.templates-preview.com/bootstrap-templates/300111854/images/wave2.png")
      0 0 repeat-x;
    animation: ${waveAnimation} 6.3s infinite linear;
    height: 30px;
    position: absolute;
    width: 100vw;
    z-index: 12;
    left: 50%;
    top: -110px;
    transform: translate(-50%);
  }

  &::after {
    top: unset;
    bottom: -120px;
    left: unset;
    right: 50%;
    transform: scale(-1, -1) translate(-50%);
  }

  > section {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-gap: 50px;
    margin-bottom: 50px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
    margin-top: 0px;
  }
`

const ProjectsTab = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 70px;
  align-items: center;
  justify-content: space-around;

  span {
    text-align: center;
    cursor: pointer;
    display: inline-block;

    &.active {
      padding: 10px 20px;
      border-radius: 4px;
      background: #fff;
      color: black;
    }
  }
`

const Projects = props => {
  return (
    <Wrapper>
      <ProjectsContainer>
        <h2>Showcase</h2>
        <ProjectsTab>
          <span>Wordpress</span>
          <span className="active">Featured</span>
          <span>React</span>
        </ProjectsTab>
        <section>
          <Project />
          <Project reverse={true} />
          <Project />
        </section>
      </ProjectsContainer>
    </Wrapper>
  )
}

export default Projects
