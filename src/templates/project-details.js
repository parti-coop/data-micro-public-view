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
  let parsedContent, columns
  if (data?.allFile?.edges.length > 0) {
    const { content } = data.allFile.edges[0].node.internal
    const { result, headers } = csvJSON(content)
    parsedContent = result
    columns = headers
    console.log(parsedContent)
    console.log(columns)
  }

  return (
    <Layout>
      <div className="">
        <h2 className="text-3xl md:px-4 md:py-4">{title}</h2>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
          />
        </div>
        <div className="md:px-4">
          <MDXProvider>
            <MDXRenderer
              title={'My Stuff!'}
              data={parsedContent}
              columns={columns}
            >
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
        </div>
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
