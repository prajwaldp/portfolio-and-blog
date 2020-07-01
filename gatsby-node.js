/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug },
    })
  })
}
