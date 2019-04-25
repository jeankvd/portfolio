import React from "react"
import styled from "styled-components"
import { Container } from "../general/GeneralStyles"
import Project from "./Project"

const ProjectsContainer = styled(Container)`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-gap: 50px;
  margin-bottom: 50px;
  /* max-width: 1200px; */
`



const Projects = props => {
  return (
    <ProjectsContainer>
      <Project />
      <Project reverse={true} />
      <Project />
      {/* <Project />
      <Project /> */}
    </ProjectsContainer>
  )
}

export default Projects
