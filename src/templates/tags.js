import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ContentsList from '../components/ContentsList'
import SEO from '../components/SEO'
import TagList from '../components/TagList'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  console.log(data)
  let ogImage
  try {
    ogImage = nodes[0].frontmatter.thumb.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO
        title={`태그: ${tag}`}
        description={`태그된 게시물: ${totalCount}개`}
        image={ogImage}
      />
      <Header />
      <TagList selected={tag} />
      <ContentsList projects={nodes} />
    </Layout>
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
          date
          thumb {
            childImageSharp {
              gatsbyImageData
              ogimg: resize(width: 1000) {
                src
              }
            }
          }
        }
      }
    }
  }
`
