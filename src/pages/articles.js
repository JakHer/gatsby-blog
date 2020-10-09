import React from "react"
import { graphql, Link } from "gatsby"
import ArticlePreview from "../components/ArticlePrveiew/ArticlePrveiew"
import PageInfo from "../components/PageInfo/PageInfo"
import styled from "styled-components"

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
    allMdx: { edges },
  } = data

  
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {edges.map(
          ({
            node: {
              excerpt,
              frontmatter: { title, slug, featuredImage },
            },
          }) => {
            return (
              <ArticlePreview
                key={slug}
                title={title}
                excerpt={excerpt}
                image={featuredImage.childImageSharp.fluid}
                slug={slug}
              />
            )
          }
        )}
      </ArticlesWrapper>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 20)
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
    }
  }
`

export default ArticlesPage
