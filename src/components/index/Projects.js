import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Container } from "../general/GeneralStyles"
import Project from "./Project"

const ReactProjects = [
  {
    title: "Cyphr",
    description: `Lead the development of a third party tool
    that manages the creation of quotes for Proformance Roofing. As the Lead Developer
    I introduced the team to styled-components, Storybook for component documentation and to Jest and 
    react-testing-library for testing the application.
    `,
    tag: "Front End Engineer - React | Laravel | Storybook | Jest",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076815/cyphr_xpgvrf.gif",
    category: "React",
  },
  {
    title: "Prang Power",
    description: `
    This rewards app for Ticonderoga has an ecommerce like system
    where users can add their information (email, address), add currency (points), and
    buy products and combines it with a static site (Gatsby).
      `,
    tag: "Front End Engineer - React | Gatsby | Storybook",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076815/prang_avm6r3.png",
    category: "React",
  },
  {
    title: "HF Reserve",
    description: `
      Tool used by two of the biggest Health Service Providers in Florida 
      (Health First Medical Group and Advent Health).
      This app uses React and Laravel to keep track of seminars, consultations,
      and people who signup to them.
      `,
    tag: "Front End Engineer - React | Laravel ",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076819/hfreserve_mghw8n.gif",
    category: "React",
  },
]

const WordPressProjects = [
  {
    title: "Flippers Pizzeria",
    description: `
     Modern WordPress site created with Vue.js, SCSS, Custom Posts and ACF.
     The use of Vue and heavy JS was necessary to create the catering
     part of this website where clients can create an catering order.
    `,
    tag: "Front End Developer - WordPress | Vue | SCSS",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076816/Flippers_uwmjny.png",
    category: "WordPress",
    link: "https://flipperspizzeria.com/",
  },
  {
    title: "Proformance Roofing",
    description: `
      A WordPress site that uses Vue.js in various pages for a 
      Quoting application that calculates the cost of having a roof serviced
      through various parameters inputted by a user.
    `,

    tag: "Front End Developer - WordPress | Vue | SCSS",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076814/Proformance_fxdchj.png",
    category: "WordPress",
    link: "https://www.proformanceroofs.com",
  },
  {
    title: "Halfwall Brewery",
    description: `
    A WordPress theme created with SCSS and ACF using modern web practices like
    BEM and. Created while working at three.two.one .
    `,
    tag: "Front End Developer - WordPress | SCSS",
    img:
      "https://res.cloudinary.com/dub9ykyuq/image/upload/v1561076821/Halfwall_jjjvvr.png",
    category: "WordPress",
    link: "https://halfwallbrewery.com",
  },
]

const Wrapper = styled.div`
  background: #182f4a;
  padding: 80px 0px 40px 0px;
  margin-bottom: 100px;
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
    width: 170px;

    &.active {
      border-radius: 4px;
      background: #fff;
      color: black;
    }
  }
`

const Tabs = ["React", "WordPress & Vue"]

const Projects = props => {
  const [activeTab, setActiveTab] = useState(0)

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
