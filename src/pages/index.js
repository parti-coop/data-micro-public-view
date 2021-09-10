import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Header from '../components/Header'
import ContentsList from '../components/ContentsList'

export default function Home({ data }) {
  console.log(data)
  const fluid = data.file.childImageSharp.fluid
  const gatsbyImageData = data.file.childImageSharp.gatsbyImageData
  console.log(fluid)
  return (
    <Layout>
      <Header />
      <ContentsList />
      {/* <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer Mastery </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Project
          </Link>
        </div>
        <GatsbyImage image={gatsbyImageData} alt="Banner"></GatsbyImage>
      </section> */}
    </Layout>
  )
}

// page query -> component에서는 작동하지 않음
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }, absolutePath: {}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        gatsbyImageData
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
