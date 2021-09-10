const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
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
      }
    }
  `)
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  })
  // actions.createPage({
  //   path: `/projects/graphql-test`,
  //   component: path.resolve("./src/templates/project-details.js"),
  //   context: { slug: 'graphql-test' },
  // })
}
