import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Header() {
  // 컴포넌트에서 useStaticQuery는 한 번만 쓸 수 있다.
  const data = useStaticQuery(graphql`
    query SiteInfo2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <header className="text-center md:flex md:text-left pb-8 border-b border-coolgray400 md:mt-6">
      <div>
        <h2 className="text-coolgray500 mb-1">
          데이터로 읽는 공공쟁점 사회여론
        </h2>
        <h1 className="text-4xl text-primary font-bold mb-4">한국인의 생각</h1>
        <div className="hidden md:block">
          <h3>
            투명성과 공공성을 확대하여 더 신뢰할 수 있는 사회를 만들기 위해
            공익데이터를 만듭니다.
          </h3>
          <h3>
            사회 쟁점에 대한 한국인의 생각을 담은 데이터는 공공의 창에서
            제공하고 빠띠가 개발합니다. <br />
          </h3>
        </div>
        <button className="w-44 h-12 bg-primary text-white rounded-lg">
          데이터 다운받기
        </button>
      </div>
      <div>
        <StaticImage
          src={'../../static/main.webp'}
          alt="공공의창 메인이미지"
          className="w-full md:max-w-xl mt-6"
        />
      </div>
    </header>
  )
}
