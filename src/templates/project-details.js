import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

export default function ProjectDetails({ data }) {
  console.log(data)
  // const { html } = data.mdx
  const { title, stack, featuredImg } = data.mdx.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
          />
        </div>
        <MDXProvider>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
        {/* <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        /> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        slug
        stack
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
