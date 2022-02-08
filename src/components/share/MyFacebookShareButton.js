import React from 'react'
import { FacebookShareButton } from 'react-share'
import { useStaticQuery, graphql } from 'gatsby'

const MyFacebookShareButton = ({ shareUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            url
          }
        }
      }
    `,
  )
  const url = `${site.siteMetadata.url}${shareUrl}`
  return (
    <FacebookShareButton url={url} className="fb-share-button mr-4">
      <img src="/icons/facebook.png" alt="facebook-share-icon" />
    </FacebookShareButton>
  )
}

export default MyFacebookShareButton
