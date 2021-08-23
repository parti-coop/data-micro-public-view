import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
  // const site = data.allGhostSettings.edges[0].node
  const site = {
    title: '공공의창 2021',
    description: '한눈에 보는 한국의 미디어',
    logo: 'https://static.ghost.org/v1.0.0/images/ghost-logo.svg',
    icon: 'https://gatsby.ghost.io/content/images/2019/01/favicon.png',
    cover_image:
      'https://images.unsplash.com/photo-1628882191768-7dc4d8b609b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    facebook: 'collectpublicview',
    twitter: '@publicviewkr',
    lang: 'ko',
    timezone: 'UTC+9',
    codeinjection_head: null,
    codeinjection_foot: null,
    codeinjection_styles: '',
    navigation: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Hello',
        url: '/hello',
      },
      {
        label: 'Help',
        url: 'http://hannun.or.kr/2021/',
      },
    ],
  }

  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null

  return (
    <>
      <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet>

      <div className="viewport">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <header
            className="site-head"
            style={{
              ...(site.cover_image && {
                backgroundImage: `url(${site.cover_image})`,
              }),
            }}
          >
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link to="/">
                    {site.logo ? (
                      <img
                        className="site-logo"
                        src={site.logo}
                        alt={site.title}
                      />
                    ) : (
                      <Img
                        fixed={data.file.childImageSharp.fixed}
                        alt={site.title}
                      />
                    )}
                  </Link>
                </div>
                <div className="site-mast-right">
                  {site.twitter && (
                    <a
                      href={twitterUrl}
                      className="site-nav-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="site-nav-icon"
                        src="/images/icons/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  )}
                  {site.facebook && (
                    <a
                      href={facebookUrl}
                      className="site-nav-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="site-nav-icon"
                        src="/images/icons/facebook.svg"
                        alt="Facebook"
                      />
                    </a>
                  )}
                  <a
                    className="site-nav-item"
                    href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="site-nav-icon"
                      src="/images/icons/rss.svg"
                      alt="RSS Feed"
                    />
                  </a>
                </div>
              </div>
              {isHome ? (
                <div className="site-banner">
                  <h1 className="site-banner-title">{site.title}</h1>
                  <p className="site-banner-desc">{site.description}</p>
                </div>
              ) : null}
              <nav className="site-nav">
                <div className="site-nav-left">
                  {/* The navigation items as setup in Ghost */}
                  <Navigation data={site.navigation} navClass="site-nav-item" />
                </div>
                <div className="site-nav-right">
                  <Link className="site-nav-button" to="/about">
                    About
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {children}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                <Link to="/">{site.title}</Link> © 2021 &mdash; Published with{' '}
                <a
                  className="site-foot-nav-item"
                  href="https://ghost.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ghost
                </a>
              </div>
              <div className="site-foot-nav-right">
                <Navigation
                  data={site.navigation}
                  navClass="site-foot-nav-item"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
}

const DefaultLayoutSettingsQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettings {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <DefaultLayout data={data} {...props} />}
  />
)

export default DefaultLayoutSettingsQuery
