import React from "react"
import { graphql, Link } from "gatsby"

const ArticlesPage = ({ data }) => (
  <>
    <h1>Hi from the Articles page</h1>
    <p>Welcome to Articles page</p>
    {data.allMdx.edges.map(item => {
      const { author, title, slug } = item.node.frontmatter
      const { id, excerpt } = item.node
      return (
        <div key={id}>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <p>{author}</p>
        </div>
      )
    })}
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
