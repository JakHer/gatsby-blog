import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

  const { author, title, description } = data.site.siteMetadata

  return (
    <p>
      {title} {description} {author}
    </p>
  )
}

export default Post
