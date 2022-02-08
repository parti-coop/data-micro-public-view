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

  const googletagmanager = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WM3QY4R7HF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-WM3QY4R7HF', {
      'linker': {
      'domains': ['public-view.kr', 'public-view.org']
      }
    });
  </script>
  `

  return (
    <Helmet
      htmlAttributes={{
        lang: `ko`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      {/* General tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="image" content={image ?? '/main.jpg'} />
      <meta
        name="description"
        content={
          metaDescription ??
          '투명성과 공공성을 확대하여 더 신뢰할 수 있는 사회를 만들기 위해 공익데이터를 만듭니다'
        }
      />
      <meta name="keywords" content={`한국인의생각,공공의창,빠띠,공익데이터`} />
      {/* OpenGraph tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      {/* Twitter card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />

      <script dangerouslySetInnerHTML={{ __html: googletagmanager }} />
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </Helmet>
  )
}

export default SEO
