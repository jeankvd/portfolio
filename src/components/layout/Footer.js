import React, { Component } from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  color: ${props => props.theme.textPrimaryColor};
  box-sizing: content-box;
  flex-shrink: 0;
  margin-top: 20px;

  h1 {
    margin: 0;
  }
`

const TopFooter = styled.div`
  background: ${props => props.theme.lightBgColor};
  padding: 50px;
  text-align: center;
  margin-top: 100px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  h4 {
    margin: 0px;
    display: inline-block;
  }

  span {
    font-size: 2rem;
    display: inline-block;
  }
`

const BottomFooter = styled.div`
  background: #fff;
  padding: 20px;
`

const Footer = e => {
  return (
    <StyledFooter>
      <TopFooter>
        <div>
          <h4>Let's Talk {" "}</h4>
          <span>📨</span>
        </div>

        <p>
          Interested in hiring me? work or freelancing, feel free to email me.
        </p>
        <a href="mailto:jeankvdiaz@gmail.com">jeankvdiaz@gmail.com</a>
      </TopFooter>
      <BottomFooter>
        <span>© {new Date().getFullYear()}, Built with + 🌮</span>
      </BottomFooter>
    </StyledFooter>
  )
}

export default Footer
