const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(
    `
      query articlesQuery {
        allDatoCmsArticle {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    `
  )

  // Create blog post pages.
  result.data.allDatoCmsArticle.edges.forEach(post => {
    const slugifiedTitle = slugify(post.node.title, { lower: true })

    createPage({
      // Path for this page — require
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
