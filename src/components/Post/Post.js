import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
`

const StyledParagraph = styled.p`
  font-weight: 500;
  margin-bottom: 0;
`

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Post = () => {
  const data = useStaticQuery(query)

  const { author, title } = data.site.siteMetadata

  return (
    <StyledWrapper>
      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph>{author}</StyledParagraph>
    </StyledWrapper>
  )
}

export default Post
