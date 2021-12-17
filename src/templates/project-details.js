import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import csvJSON from '../utils/csvJson'

export default function ProjectDetails({ data }) {
  const { title, featuredImg, slug } = data.mdx.frontmatter
  console.log(data)
  let parsedContent
  if (data?.allFile?.edges.length > 0) {
    const { content } = data.allFile.edges[0].node.internal
    parsedContent = csvJSON(content)
    console.log(parsedContent)
  }

  return (
    <Layout>
      <div className={styles.details}>
        <h2 className="text-3xl">{title}</h2>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
          />
        </div>
        <MDXProvider>
          <MDXRenderer title={'My Stuff!'} data={parsedContent}>
            {data.mdx.body}
          </MDXRenderer>
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
        title
        slug
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    allFile(filter: { name: { eq: $slug } }) {
      edges {
        node {
          internal {
            content
          }
        }
      }
    }
  }
`
