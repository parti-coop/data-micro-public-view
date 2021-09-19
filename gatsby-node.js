const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // const { data } = await graphql(`
  //   query Projects {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)
  const { data } = await graphql(`
    query Projects {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
          }
        }
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)
  data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  })

  // Extract tag data from query
  const tags = data.allMdx.group
  const tagTemplate = path.resolve('./src/templates/tags.js')
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.tag}`,
      component: tagTemplate,
      context: {
        tag: tag.tag,
      },
    })
  })
  // actions.createPage({
  //   path: `/projects/graphql-test`,
  //   component: path.resolve("./src/templates/project-details.js"),
  //   context: { slug: 'graphql-test' },
  // })
}
