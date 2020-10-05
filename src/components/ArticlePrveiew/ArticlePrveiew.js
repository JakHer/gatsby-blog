import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
`

const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  z-index: 2;

  @media (max-width: 1100px) {
    max-height: 250px;
  }

  @media (max-width: 700px) {
    max-width: 350px;
    align-self: center;
    justify-self: center;
  }
`

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  z-index: 2;

  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
`

const ArticlePreview = ({ title, excerpt, featuredImage }) => (
  <PreviewWrapper featuredImage={featuredImage}>
    <StyledImg fluid={featuredImage} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
  </PreviewWrapper>
)

export default ArticlePreview
