import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  box-sizing: content-box;
  padding: 20px;
  z-index: 111111111111111;

  box-shadow: 6px 2px 24px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.secondaryTextColor};
`

const Header = e => {
  return (
    <StyledHeader>
      <span>Logo</span>
      <nav>
        <StyledLink to="/">Blog</StyledLink>
      </nav>
    </StyledHeader>
  )
}

export default Header
