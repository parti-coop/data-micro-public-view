import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import * as styles from '../styles/projects.module.css'
import Filter from './Filter'

export default function ContentsList({ projects, selected, tag }) {
  const [query, setQuery] = useState('')

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
              date
              summary
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

    projects = data.projects.nodes
  }

  if (query) {
    console.log(query)
    projects = projects.filter((project) => {
      return project.frontmatter.title.includes(query)
    })
  }

  const onQueryChange = (value) => {
    setQuery(value)
  }
  console.log(projects);
  return (
    <div className="px-6 mt-8">
      <Filter tag={tag} onQueryChange={onQueryChange} />

      <div className="mt-8">
        <div>
          <div className="w-full md:grid md:grid-cols-3 md:gap-4">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <GatsbyImage
                    className="rounded-lg h-60"
                    image={
                      project.frontmatter?.thumb?.childImageSharp?.gatsbyImageData || ''
                    }
                  />
                  <div className="p-6">
                    <h3 className="text-coolgray800 text-xl font-bold ">
                      {project.frontmatter.title}
                    </h3>
                    <div className="mt-2 text-coolgray600 text-lg">
                      {project.frontmatter.summary}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
