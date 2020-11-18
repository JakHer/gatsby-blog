import React from "react"
import { graphql } from "gatsby"
import ArticlePreview from "../components/ArticlePrveiew/ArticlePrveiew"
import PageInfo from "../components/PageInfo/PageInfo"
import styled from "styled-components"
import HomePageLink from "../components/HomePageLink/HomePageLink"
import slugify from "slugify"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const pageData = {
  title: `articles`,
  paragraph: `This is test paragraph for Gatsby blog development`,
}

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { edges },
  } = data

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {edges.map(item => {
          return (
            <ArticlePreview
              key={item.node.title}
              title={item.node.title}
              image={item.node.featuredImage.fluid}
              slug={slugify(item.node.title, { lower: true })}
            />
          )
        })}
      </ArticlesWrapper>
      <HomePageLink to="/">Go back to homepage</HomePageLink>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsArticle {
      edges {
        node {
          title
          author
          featuredImage {
            fluid(
              maxWidth: 600
              forceBlurhash: false
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ArticlesPage
