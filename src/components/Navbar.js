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

  return (
    <>
      <nav className="pl-6 pt-7 pb-5 pr-6 md:pt-8 md:pb-8 border-b border-coolgray400">
        <div className="flex">
          <h1 className="text-4xl font-semibold flex-1">
            <Link className="font-header font-normal" to="/">
              {title}
            </Link>
          </h1>
          <div className="text-lg hidden md:flex">
            <Link className="mr-4 md:flex md:flex-col md:justify-center" to="/">
              한국인의 생각
            </Link>
            <Link
              className="mr-4 md:flex md:flex-col md:justify-center"
              to="/about"
            >
              한국인의 생각이란?
            </Link>
            <Link
              to="/projects"
              className="md:flex md:flex-col md:justify-center"
            >
              프로젝트
            </Link>
          </div>
          <div className="text-lg flex md:hidden">
            <StaticImage
              src={'../../static/menu.png'}
              alt="공공의창 메인이미지"
              className="w-8"
              onClick={() => {
                console.log('asdf')
                setOpen(!open)
              }}
            />
          </div>
        </div>
      </nav>
      {open ? (
        <div className="absolute w-full bg-white">
          <Link
            className="block pt-7 pb-5 border-b border-coolgray400 text-center"
            to="/about"
          >
            한국인의 생각이란?
          </Link>
          <Link
            className="block pt-7 pb-5 border-b border-coolgray400 text-center"
            to="/projects"
          >
            프로젝트
          </Link>
        </div>
      ) : null}
    </>
  )
}
