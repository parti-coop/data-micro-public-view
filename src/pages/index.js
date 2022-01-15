import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ContentsList from '../components/ContentsList'
import SEO from '../components/SEO'
import TagList from '../components/TagList'

export default function Home({ data, pageContext }) {
  const fluid = data.file.childImageSharp.fluid
  const gatsbyImageData = data.file.childImageSharp.gatsbyImageData
  return (
    <Layout>
      <SEO
        image={'/main.jpg'}
        title={'홈'}
        description={
          '투명성과 공공성을 확대하여 더 신뢰할 수 있는 사회를 만들기 위해 공익데이터를 만듭니다'
        }
      />
      <Header />
      <TagList selected={'전체'} />
      <ContentsList />
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
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
