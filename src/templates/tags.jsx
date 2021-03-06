import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ContentsList from '../components/ContentsList'
import SEO from '../components/SEO'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx

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
      <ContentsList tag={tag} projects={nodes} />
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      nodes: PropTypes.arrayOf(),
    }),
  }),
}

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
          summary
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
