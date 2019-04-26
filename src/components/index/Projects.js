import React from "react"
import styled from "styled-components"
import { Container } from "../general/GeneralStyles"
import Project from "./Project"

const Wrapper = styled.div`
  background: #cee9f9;
  padding: 80px 0px 40px 0px;
`

const ProjectsContainer = styled(Container)`
  /* max-width: 1200px; */
  /* margin-top: 100px; */

  > div {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-gap: 50px;
    margin-bottom: 50px;
  }

  h2 {
    text-align: center;
    margin-bottom: 100px;
    margin-top: 0px;
  }
`

const Projects = props => {
  return (
    <Wrapper>
      <ProjectsContainer>
        <h2>Showcase</h2>
        <div>
          <Project />
          <Project reverse={true} />
          <Project />
        </div>
      </ProjectsContainer>
    </Wrapper>
  )
}

export default Projects
