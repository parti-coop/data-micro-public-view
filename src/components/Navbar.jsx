import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
  // 컴포넌트에서 useStaticQuery는 한 번만 쓸 수 있다.
  const data = useStaticQuery(graphql`
    query SiteInfo3 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  const [open, setOpen] = useState(false)
  const isBrowser = () => typeof window !== 'undefined'
  const isAbout = isBrowser() && window.location.href.includes('/about')

  return (
    <>
      <nav className="pl-6 pt-7 pb-5 pr-6 md:pt-8 md:pb-8 border-b border-coolgray400 bg-white z-50">
        <div className="flex">
          <h1 className="text-4xl font-semibold flex-1">
            <Link className="font-header font-normal" to="/">
              {title}
            </Link>
          </h1>
          <div className="text-lg hidden md:flex">
            <Link
              className={`mr-4 md:flex md:flex-col md:justify-center ${
                isAbout ? 'text-coolgray800' : 'text-coolgray600'
              }`}
              to="/about"
            >
              한국인의 생각이란?
            </Link>
          </div>
          <div
            className="text-lg flex md:hidden"
            onClick={() => {
              setOpen(!open)
            }}
            style={{ marginTop: '4px' }}
          >
            <div style={{ height: '21px' }}>
              <StaticImage
                src={'../../static/menu-hamburger@3x.webp'}
                width={32}
                height={21}
                aspectRatio={32 / 21}
                alt="hamburger"
              />
            </div>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="absolute w-full bg-white z-30">
          <Link
            className="block pt-7 pb-5 border-b border-coolgray400 text-center text-coolgray600"
            to="/about"
          >
            한국인의 생각이란?
          </Link>
        </div>
      ) : null}
    </>
  )
}
