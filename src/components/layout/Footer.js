import React, { Component } from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.darkPrimaryColor};
  color: white;
  box-sizing: content-box;
  padding: 20px;
  flex-shrink: 0;
  margin-top: 20px;

  h1 {
    margin: 0;
  }
`

const Footer = e => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

export default Footer
