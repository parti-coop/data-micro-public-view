import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
  return (
    <nav className="mt-9 pb-9 border-b border-coolgray400">
      <div className="md:max-w-screen-lg md:flex">
        <h1 className="text-4xl font-semibold md:flex-1">{title}</h1>
        <div className="text-lg hidden md:flex md:">
          <Link className="mr-4" to="/">
            한국인의 생각
          </Link>
          <Link className="mr-4" to="/about">
            한국인의 생각이란?
          </Link>
          <Link to="/projects">프로젝트</Link>
        </div>
      </div>
    </nav>
  )
}
