import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, slug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  //   const defaultUrl = site.siteMetadata.url
  const defaultImage = '/og-image.png'
  const metaImage = image ? image : defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* General tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="image" content={image} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={`한국인의생각,공공의창,빠띠`} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />

      {/* Twitter card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
