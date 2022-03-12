import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import csvJSON from '../utils/csvJson'
import Tag from '../components/Tag'
import SEO from '../components/SEO'
import MyKakaoShareButton from '../components/share/MyKakaoShareButton'
import MyFacebookShareButton from '../components/share/MyFacebookShareButton'
import MyTwitterShareButton from '../components/share/MyTwitterShareButton'

const H1 = ({ children }) => (
  <h1 className='text-3xl md:text-4xl'>
    {children}
  </h1>
)

const H2 = ({ children }) => (
  <h2 className='text-xl md:text-2xl mb-6 mt-16 font-bold'>
    {children}
  </h2>
)

const H3 = ({ children }) => (
  <h3 className='text-md md:text-xl mb-4 mt-12 font-medium'>
    {children}
  </h3>
)

const P = ({ children }) => (
  <h2 className='mb-6 leading-6 text-coolgray600'>
    {children}
  </h2>
)

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
}

export default function ProjectDetails({ data, pageContext }) {
  const { title, summary, featuredImg, slug, tags } = data.mdx.frontmatter
  let parsedContent, columns, fileUrl
  if (data?.allFile?.edges.length > 0) {
    const { content } = data.allFile.edges[0].node.internal
    const { publicURL } = data.allFile.edges[0].node
    const { result, headers } = csvJSON(content)
    parsedContent = result
    columns = headers
    fileUrl = publicURL
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
      <SEO title={title} description={summary} />
      <div className="mb-4 md:mt-4">
        {tags.map((tag, index) => {
          return <Tag key={`${tag}-${index}`} tag={tag} />
        })}
      </div>
      <div className="border-b border-coolgrey400">
        <h2 className="text-3xl md:px-4 pb-6 md:py-4">{title}</h2>
        <div className="md:px-4 border-coolgray600">
          <MDXProvider components={components}>
            <MDXRenderer
              title={'My Stuff!'}
              data={parsedContent}
              columns={columns}
            >
              {data.mdx.body}
            </MDXRenderer>
          </MDXProvider>
          <div className="pt-8 pb-12 flex md:pt-8 md:pb-12">
            <MyFacebookShareButton shareUrl={`/projects/${slug}`} />
            <MyTwitterShareButton shareUrl={`/projects/${slug}`} />
          </div>
        </div>
        <a href={fileUrl}>
          <button className="w-40 h-12 mb-16 bg-primary text-white rounded-lg hover:bg-primary2">
            다운받기
          </button>
        </a>
      </div>
      <div className="md:flex py-4 md:py-6 md:px-4 border-b border-coolgray600 ">
        {prev ? (
          <Link
            to={`/projects/${prev?.frontmatter?.slug}`}
            className="md:flex-1 md:flex-start"
          >
            <div>
              <div className="mb-3 font-bold text-coolgray600">&lt; 이전 글</div>
              <div className="flex-1 flex-start text-coolgray600">
                {prev?.frontmatter?.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="md:flex-1 md:flex-start">
            <div>
              <div className="mb-3 font-bold text-coolgray600">&lt; 이전 글</div>
              <div className="flex-1 flex-start text-coolgray600">없음</div>
            </div>
          </div>
        )}
        {next ? (
          <Link
            to={`/projects/${next?.frontmatter.slug}`}
            className=" md:text-right"
          >
            <div className="mt-4 md:mt-0">
              <div className="mb-3 font-bold text-coolgray600">다음 글 &gt;</div>
              <div className="text-coolgray600">{next?.frontmatter?.title}</div>
            </div>
          </Link>
        ) : (
          <div className=" md:text-right">
            <div className="mt-4 md:mt-0">
              <div className="mb-3 font-bold text-coolgray600">다음 글 &gt;</div>
              <div className="text-coolgray600">없음</div>
            </div>
          </div>
        )}
      </div>
      <div className="flex pb-4  md:px-4"></div>
      <div className="mt-8 mb-16 text-center">
        <Link to="/">
          <button
            className="px-8 py-4 bg-coolgray100 text-coolgray800 rounded-md border border-coolgray600
          hover:bg-white hover:border-listButton"
          >
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
          publicURL
        }
      }
    }
  }
`
