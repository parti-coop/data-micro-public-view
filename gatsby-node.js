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
  data.allMdx.nodes.forEach(async (node) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: {
        slug: node.frontmatter.slug,
      },
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

// async function onCreateNode({
//   node,
//   actions,
//   loadNodeContent,
//   createNodeId,
//   createContentDigest,
// }) {
//   function transformObject(obj, id, type) {
//     const yamlNode = {
//       ...obj,
//       id,
//       children: [],
//       parent: node.id,
//       internal: {
//         contentDigest: createContentDigest(obj),
//         type,
//       },
//     }
//     createNode(yamlNode)
//     createParentChildLink({ parent: node, child: yamlNode })
//   }

//   const { createNode, createParentChildLink } = actions

//   if (node.internal.mediaType !== `text/csv`) {
//     return
//   }

//   const content = await loadNodeContent(node)
//   const parsedContent = csvJSON(content)
//   console.log(node.name)
//   console.log(content)
//   console.log(parsedContent)

//   const csvNode = {
//     children: [],
//     parent: node.id,
//     name: node.name,
//     content: parsedContent,
//     internal: {
//       contentDigest: createContentDigest(parsedContent),
//     },
//   }

//   createNode(csvNode)
//   createParentChildLink({ parent: node, child: csvNode })

//   // parsedContent.forEach((obj, i) => {
//   //   transformObject(
//   //     obj,
//   //     obj.id ? obj.id : createNodeId(`${node.id} [${i}] >>> YAML`),
//   //     _.upperFirst(_.camelCase(`${node.name} Yaml`))
//   //   )
//   // })
// }

// exports.onCreateNode = onCreateNode
