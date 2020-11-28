import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"
import styled from "styled-components"
import SEO from "../components/SEO";

const FeaturedItems = styled.h4`
  font-size: 1.2rem;
  color: #939393;
`

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <>
      <Seo
          title="Doug Mellon :)"
          description="Doug Mellon"
      />
      <h1>
          Hello, my name is Doug Mellon.
      </h1>
        <h4>
            I'm a software engineering student at the University of Northern Colorado with a passion for
            backend development. Currently, I am conducting undergraduate research on the use of autonomous
            drones in wildfire mitigation.
        </h4>
        <h5>
            I am in search of an internship for summer 2021. If you believe I would be a good fit for
            your team, I would love to <span>buy you a coffee</span> chat from a distance.
        </h5>
      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogItem
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
          alt={node.frontmatter.featuredImageAlt}
          tag={node.frontmatter.tags}
        />
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
          excerpt
        }
      }
    }
  }
`
