const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(
    `
      query queryArticles {
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
                    fluid(maxHeight: 500, maxWidth: 700) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(result.data.allMdx.edges)

  // Create blog post pages.
  result.data.allMdx.edges.forEach(post => {
    createPage({
      // Path for this page — require
      path: `${post.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}
