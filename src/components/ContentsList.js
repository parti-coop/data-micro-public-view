import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/projects.module.css'

export default function ContentsList() {
  const data = useStaticQuery(graphql`
    query ProjectList {
      projects: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          body
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
      contact: site {
        siteMetadata {
          contact
        }
      }
    }
  `)

  console.log(data)

  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <div>
      <div className={styles.portfolio}>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </div>
  )
}
