import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

const theme = {
  darkPrimaryColor: "#1976D2",
  primaryColor: "#2196F3",
  lightPrimaryColor: "#BBDEFB",
  textPrimaryColor: "rgba(0,0,0,.8)",
  accentColor: "#607D8B",
  primaryTextColor: "#212121",
  secondaryTextColor: "#757575",
  dividerColor: "#BDBDBD",
}

const SiteContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1 0 auto;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <ThemeProvider theme={theme}>
        <SiteContainer
        // style={{
        //   marginLeft: `auto`,
        //   marginRight: `auto`,
        //   maxWidth: rhythm(24),
        //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // }}
        // I want to keep it for future reference
        >
          <Header />
          <Content>{children}</Content>
          <Footer />
        </SiteContainer>
      </ThemeProvider>
    )
  }
}

export default Layout
