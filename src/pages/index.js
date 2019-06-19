import React from "react"
import { Link, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

import Bio from "../components/bio"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Hero from "../components/index/Hero"
import Introduction from "../components/index/Introduction"
import Projects from "../components/index/Projects"
import { Container } from "../components/general/GeneralStyles"
import FadeInTopContainer from "../components/general/FadeInTopContainer"

/* 
https://kuon.space/
https://www.olivier-guilleux.com/
https://gatsby-tutorial-starter.netlify.com/
https://cara.lekoarts.de/
https://devchico.com/gatsby-starter-cv/
https://www.elliotcondon.com/
https://www.tweag.io/posts/2018-12-20-asterius-todomvc.html
https://www.indiehackers.com/interviews/page/1
https://codepen.io/bob6664569/pen/rOzmve
https://dribbble.com/shots/2227194-Coyote-Logo
http://whoisryosuke.com/
https://www.magicleap.com/
https://www.vectary.com/3d-modeling-how-to/3D-banner-maker-how-to-create-3D-banner/
https://leamsigc.com/
http://sterling.it/en/products
https://www.swiftbysundell.com/
https://gatsby.ghost.org/
http://kono.co.za/#3
https://undraw.co/illustrations
*/

/* 
  -On MagicaVoxel, create a 3d model of a developer and and make it the hero with three.js. add a parallax 3d effect
  -Show off strength

*/

/* Use Wave Blob as Title for pages */

const Blog = styled.div`
  position: relative;

  h3 {
    margin-top: 0px;
    margin-bottom: 10px;
    color: ${props => props.theme.primaryTextColor};

    &:hover {
      color: ${props => props.theme.darkPrimaryColor};
    }
  }

  h5 {
    margin: 0px;
  }

  a {
    box-shadow: none;
    color: inherit;
  }
`

const BlogImg = styled(Img)`
  max-height: 170px;
  border-radius: 4px;
  margin-bottom: 10px;
`

const BlogsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 24px;
  /* max-width: 1100px; */
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(data)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Hero />
        <Introduction />
        <Projects />
        {/* <Bio /> */}
        <Container>
          <Title>Blog Posts</Title>
        </Container>
        <BlogsContainer>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <FadeInTopContainer
                offset={index * -85}
                range={150}
                key={node.fields.slug}
                index={index}
              >
                <Blog key={node.fields.slug} index={index}>
                  <BlogImg
                    sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                  />
                  <div>
                    <h5>Frontend</h5>
                    <h3>
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </div>
                </Blog>
              </FadeInTopContainer>
            )
          })}
        </BlogsContainer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
