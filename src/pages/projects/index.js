import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import ContentsList from '../../components/ContentsList'

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)
  return (
    <Layout>
      <div className="p-6 md:p-8">
        <h1 className="text-2xl font-bold text-coolgray800">프로젝트</h1>
        <ContentsList />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage {
    projects: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        body
        excerpt
        frontmatter {
          title
          slug
          date
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
