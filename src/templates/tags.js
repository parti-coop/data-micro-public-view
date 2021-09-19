import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Link, graphql } from 'gatsby'
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  console.log(data)
  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {nodes.map((node) => {
          const { title, slug } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={`/projects/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/">All tags</Link>
    </div>
  )
}
// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       nodes: PropTypes.arrayOf(),
//     }),
//   }),
// }

export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        frontmatter {
          title
          slug
          stack
          date
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
