import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledImage = styled(Image)`
  max-width: 350px;
  max-height: 350px;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`

export const query = graphql`
  query queryArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        author
        slug
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const { title, author } = data.mdx.frontmatter
  const { body } = data.mdx
  const { fluid } = data.mdx.frontmatter.featuredImage.childImageSharp
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <StyledImage fluid={fluid} />
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default PostLayout
