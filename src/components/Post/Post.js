import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Post = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { author, title, description } = data.site.siteMetadata

  return (
    <p>
      {title} {description} {author}
    </p>
  )
}

export default Post
