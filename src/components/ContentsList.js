import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/projects.module.css'

export default function ContentsList({ projects }) {
  if (!projects) {
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

    projects = data.projects.nodes
  }

  return (
    <div className="mt-8">
      <div>
        <div className="w-full md:grid md:grid-cols-3 md:gap-4">
          {projects.map((project) => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  className="rounded-lg h-60"
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                />
                <div className="p-6">
                  <h3 className="text-xl">{project.frontmatter.title}</h3>
                  <div className="mt-2 text-coolgray600">
                    {project.frontmatter.stack}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p>스크롤 하시면 더 많은 컨텐츠를 확인하실 수 있습니다</p>
      </div>
    </div>
  )
}
