import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import csvJSON from '../utils/csvJson'
import Tag from '../components/Tag'
import SEO from '../components/SEO'
import KakaoShareButton from '../components/share/KakaoShareButton'
import FacebookShareButton from '../components/share/FacebookShareButton'
import TwitterShareButton from '../components/share/TwitterShareButton'

export default function ProjectDetails({ data, pageContext }) {
  const { title, summary, featuredImg, slug, tags } = data.mdx.frontmatter
  let parsedContent, columns
  if (data?.allFile?.edges.length > 0) {
    const { content } = data.allFile.edges[0].node.internal
    const { result, headers } = csvJSON(content)
    parsedContent = result
    columns = headers
  }

  let ogImage
  try {
    ogImage = featuredImg.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const { prev, next } = pageContext

  return (
    <Layout>
      <SEO title={title} description={summary} image={ogImage} />
      <div className="mb-4 md:mt-4">
        {tags.map((tag) => {
          return <Tag tag={tag} />
        })}
      </div>
      <div className="border-b border-coolgrey400">
        <h2 className="text-3xl md:px-4 md:py-4">{title}</h2>
        {/* <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
          />
        </div> */}
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
          <div className="py-4 flex md:pt-8 md:pb-12">
            <FacebookShareButton />
            <TwitterShareButton />
            <KakaoShareButton />
          </div>
        </div>
      </div>
      <div className="md:flex py-4 md:py-6 md:px-4 border-b border-coolgray600">
        {prev ? (
          <Link
            to={`/projects/${prev?.frontmatter?.slug}`}
            className="md:flex-1 md:flex-start"
          >
            <div>
              <div className="mb-3">&lt; 이전 글</div>
              <div className="flex-1 flex-start">
                {prev?.frontmatter?.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="md:flex-1 md:flex-start">
            <div>
              <div className="mb-3">&lt; 이전 글</div>
              <div className="flex-1 flex-start">없음</div>
            </div>
          </div>
        )}
        {next ? (
          <Link
            to={`/projects/${next?.frontmatter.slug}`}
            className=" md:text-right"
          >
            <div className="mt-4 md:mt-0">
              <div className="mb-3">다음 글 &gt;</div>
              <div className="">{next?.frontmatter?.title}</div>
            </div>
          </Link>
        ) : (
          <div className=" md:text-right">
            <div className="mt-4 md:mt-0">
              <div className="mb-3">다음 글 &gt;</div>
              <div className="">없음</div>
            </div>
          </div>
        )}
      </div>
      <div className="flex pb-4  md:px-4"></div>
      <div className="mt-8 mb-16 text-center">
        <Link to="/">
          <button className="px-8 py-4 bg-coolgray100 rounded-md border border-coolgray600">
            목록 바로가기
          </button>
        </Link>
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
        tags
        summary
        featuredImg {
          childImageSharp {
            gatsbyImageData
            ogimg: resize(width: 1000) {
              src
            }
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
