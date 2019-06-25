import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  width: 95vw;
  max-width: ${props => props.theme.maxWidth};
`

export const H1 = styled.h1`
  color: ${props => props.theme.textPrimaryColor};
  font-size: 3rem;
  line-height: 4.5rem;
  font-weight: 900;
  /* margin: 0 0 1.45rem; */
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt", "kern";

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

`

const H3 = styled.h3`
  font-family: Lomino, LominoSubset, "open-sans", sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0px;
  margin-bottom: 16px;
  margin-top: auto;
`

export const P = styled.p`
  font-size: 18px;
  line-height: 1.4;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt", "kern";
`
