import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Container } from "../general/GeneralStyles"
import Project from "./Project"
import ProjectsData from "../index/Projects"

const ReactProjects = [
  {
    title: "Cyphr",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Lead / Front End Developer - React | Laravel | Storybook | Jest",
    img: "./featured-image.jpg",
    category: "React",
  },
  {
    title: "HF Reserve",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Front End Developer - React | Laravel ",
    img: "./featured-image.jpg",
    category: "React",
  },
  {
    title: "Prang Power",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Front End Developer - React | Gatsby | Storybook",
    img: "./featured-image.jpg",
    category: "React",
  },
]

const WordPressProjects = [
  {
    title: "Flippers Pizzeria",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Front End Developer - WordPress | Vue | SCSS",
    img: "./featured-image.jpg",
    category: "WordPress",
  },
  {
    title: "Proformance Roofing",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Front End Developer - WordPress | Vue | SCSS",
    img: "./featured-image.jpg",
    category: "WordPress",
  },
  {
    title: "Halfwall Brewery",
    description:
      "loreLorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam aut totam, expedita minus aliquid facilis eos cumque recusandae ducimus, hic illo laborum ad! Fugit animi, pariatur omnis delectus dolor labore!m",
    tag: "Front End Developer - WordPress | SCSS",
    img: "./featured-image.jpg",
    category: "WordPress",
  },
]

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
  justify-content: center;

  span {
    text-align: center;
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px;
    width: 135px;

    &.active {
      border-radius: 4px;
      background: #fff;
      color: black;
    }
  }
`

const Tabs = ["React", "WordPress"]

const Projects = props => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <Wrapper>
      <ProjectsContainer>
        <h2>Showcase</h2>
        <ProjectsTab>
          {Tabs.map((tab, index) => (
            <span
              onClick={() => setActiveTab(index)}
              className={activeTab == index ? "active" : null}
            >
              {tab}
            </span>
          ))}
        </ProjectsTab>
        <section>
          {activeTab == 0
            ? ReactProjects.map((project, index) => (
                <Project project={project} reverse={index == 1} />
              ))
            : WordPressProjects.map((project, index) => (
                <Project project={project} reverse={index == 1} />
              ))}
        </section>
      </ProjectsContainer>
    </Wrapper>
  )
}

export default Projects
