import React from 'react'
import { TwitterShareButton } from 'react-share'
import { useStaticQuery, graphql } from 'gatsby'

const MyTwitterShareButton = ({ shareUrl }) => {
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
    <TwitterShareButton
      url={url}
      hashtags={['공공의창']}
      className="twitter-share-button mr-4"
    >
      <img src="/icons/twitter.png" alt="twitter-share-icon" />
    </TwitterShareButton>
  )
}

export default MyTwitterShareButton
