import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import HomePageLink from "../components/HomePageLink/HomePageLink"

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
  query queryArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      articleContent {
        ... on DatoCmsParagraph {
          parahraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(
              maxWidth: 600
              forceBlurhash: false
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const { title, author } = data.datoCmsArticle
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]
          switch (itemKey) {
            case "headingContent":
              return <h2 key={item.id}>{item.headingContent}</h2>
            case "parahraphContent":
              return <p key={item.id}>{item.parahraphContent}</p>
            case "imageData":
              return <StyledImage key={item.id} fluid={item.imageData.fluid} />
            default:
              return null
          }
        })}
      </div>
      <HomePageLink to="/articles">Go back to articles</HomePageLink>
    </div>
  )
}

export default PostLayout
