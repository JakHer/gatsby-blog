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
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  )

  // Create blog post pages.
  result.data.allMdx.edges.forEach(post => {
    createPage({
      // Path for this page — require
      path: `articles/${post.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    })
  })
}
