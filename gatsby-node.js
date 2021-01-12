const _ = require("lodash")
const path = require("path")
const slash = require("slash")

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/page.js")

    graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                layout
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      } else {
        _.each(result.data.allMarkdownRemark.edges, edge => {
          if (_.get(edge, "node.frontmatter.layout") === "page") {
            createPage({
              path: edge.node.frontmatter.slug,
              component: slash(pageTemplate),
              context: { slug: edge.node.frontmatter.slug },
            })
          }
          resolve()
        })
      }
    })
  })
}

module.exports.createPages = createPages
