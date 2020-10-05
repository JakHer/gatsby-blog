import React from "react"
import { graphql, Link } from "gatsby"
import ArticlePreview from "../components/ArticlePrveiew/ArticlePrveiew"
import PageInfo from "../components/PageInfo/PageInfo"
import styled from "styled-components"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const pageData = {
  title: `articles`,
  paragraph: `This is test paragraph for Gatsby blog development`,
}

const ArticlesPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ArticlesWrapper>
      {data.allMdx.edges.map(item => {
        const { author, title } = item.node.frontmatter
        const { id, excerpt } = item.node
        return <ArticlePreview title={title} excerpt={excerpt} />
      })}
    </ArticlesWrapper>
    <Link to="/">Go back to the homepage</Link>
  </>
)

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
          }
        }
      }
    }
  }
`

export default ArticlesPage
