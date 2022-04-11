const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query Projects {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            summary
            thumb {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)
  const posts = data.allMdx.nodes
  posts.forEach(async (node, index) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.jsx'),
      context: {
        slug: node.frontmatter.slug,
        prev: index == 0 ? null : posts[index - 1],
        next: index == posts.length - 1 ? null : posts[index + 1],
      },
    })
  })

  // Extract tag data from query
  const tags = data.allMdx.group
  const tagTemplate = path.resolve('./src/templates/tags.jsx')
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
}

//var csv is the CSV file with headers
function csvJSON(csv) {
  var lines = csv.split('\n')

  var result = []

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(',')

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentline = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  return result
}

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) {
  const { createNode, createParentChildLink } = actions

  if (node.internal.mediaType !== `text/csv`) {
    return
  }

  const content = await loadNodeContent(node)
  const parsedContent = csvJSON(content)

  const csvNode = {
    children: [],
    parent: node.id,
    name: node.name,
    internal: {
      contentDigest: createContentDigest(parsedContent),
    },
  }

  createNode(csvNode)
  createParentChildLink({ parent: node, child: csvNode })
}

exports.onCreateNode = onCreateNode
