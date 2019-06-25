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

const GatsbyImg = styled.img`
  max-width: 20px;
  margin-bottom: 0px;
  vertical-align: text-bottom;
`;

const Footer = e => {
  return (
    <StyledFooter>
      <TopFooter>
        <div>
          <h4>Let's Talk </h4>
          <span>📨</span>
        </div>

        <p>
          Interested in hiring me? work or freelancing, feel free to email me.
        </p>
        <a href="mailto:jeankvdiaz@gmail.com">jeankvdiaz@gmail.com</a>
      </TopFooter>
      <BottomFooter>
        <span>
          © {new Date().getFullYear()}, Built with{" "}
          <GatsbyImg
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiIGZvY3VzYWJsZT0iZmFsc2UiPgogIDxwYXRoIGQ9Ik02MDAgMEMyNjguNiAwIDAgMjY4LjYgMCA2MDBzMjY4LjYgNjAwIDYwMCA2MDAgNjAwLTI2OC42IDYwMC02MDBTOTMxLjQgMCA2MDAgMHpNMjY2LjYgOTMzLjNDMTc2LjEgODQyLjggMTMxIDcyNC42IDEyOS42IDYwNkw1OTQgMTA3MC40Yy0xMTguNi0xLjQtMjM2LjgtNDYuNS0zMjcuNC0xMzcuMXptNDM3LjcgMTI2LjFMMTQwLjYgNDk1LjdjNDcuNS0yMTAuMSAyMzUtMzY3LjEgNDU5LjQtMzY3LjEgMTU2LjkgMCAyOTUuNSA3NyAzODEuMiAxOTQuOUw5MTUuNiAzNzlDODQ1LjggMjc5LjUgNzMwLjUgMjE0LjMgNjAwIDIxNC4zYy0xNjcuNyAwLTMxMC4zIDEwNy43LTM2My4zIDI1Ny41bDQ5MS42IDQ5MS42YzEyMy40LTQzLjcgMjE4LTE0OC4yIDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDBjMCAyMjQuNS0xNTcgNDExLjktMzY3LjEgNDU5LjR6IiBmaWxsPSIjNjM5Ii8+Cjwvc3ZnPgo="
            alt=""
          />{" "}
          + 🌮
        </span>
      </BottomFooter>
    </StyledFooter>
  )
}

export default Footer
