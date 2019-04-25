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
  On MagicaVoxel, create a 3d model of a developer and and make it the hero with three.js. add a parallax 3d effect
*/

/* Use Wave Blob as Title for pages */

const bounceIn = keyframes`
from {
  transform: scale(.75) translate3d(-10px, 0, 0);
  opacity: 0;
}

to {
  opacity: 1;
  transform: scale(1) translate3D(0px, 0 , 0);
}
`

const Blog = styled.div`
  /* overflow: hidden; */
  box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.2);
  transition: all linear .2s;
  border-radius: .25rem;

  &:hover {
    box-shadow: 0 0.225rem 0.25rem rgba(0, 0, 0, 0.1);
  }
  /* Animation Styles */
  transform: scale(0.9);
  opacity: 0;
  animation: ${bounceIn} 0.2s linear forwards;
  animation-delay: ${props => props.index * 0.2}s;
  /* End Animation Styles */
  position: relative;

  > div {
    padding: 20px;
    /* position: absolute; */
    top: 0;
    /* background: rgba(0,0,0,.8); */
    /* height: 100%; */
    /* color: white; */
  }

  .gatsby-image-wrapper {
    height: 230px;
    margin-bottom: 0;
  }

  img {
    margin-bottom: 0;
  border-radius: .25rem .25rem 0 0;
  }

  h3 {
    margin-top: 0px;
    margin-bottom: 10px;
    color: ${props => props.theme.primaryTextColor};
    /* color: white; */

    &:hover {
      color: ${props => props.theme.darkPrimaryColor};
    }
  }

  a {
    text-decoration: none !important;
    box-shadow: none;
    color: inherit;
  }

  > div:nth-child(1) {
    transition: all ease-in-out 0.3s;
  }

  &:hover > div:nth-child(1) {
    /* margin-top: -10px; */
  }
`

const BlogsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 60px;
  /* max-width: 1100px; */
  margin: 0 auto;
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
        <BlogsContainer>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Blog key={node.fields.slug} index={index}>
                <Img
                  sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                />
                <div>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </Blog>
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
