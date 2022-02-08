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
      <div className="md:flex md:flex-col md:justify-center md:min-w-pcHeader md:flex-1 md:pr-24">
        <h2 className="text-coolgray500 mb-1 md:mb-4 md:text-2xl">
          데이터로 읽는 공공쟁점 사회여론
        </h2>
        <h1 className="text-4xl text-primary font-bold mb-4 md:text-6xl md:mb-12">
          한국인의 생각
        </h1>
        <div className="hidden md:block md:mb-8 text-lg leading-7 text-coolgray600">
          <h3>
            투명성과 공공성을 확대하여 더 신뢰할 수 있는 사회를 만들기 위해
            공익데이터를 만듭니다.
          </h3>
          <h3>
            사회 쟁점에 대한 한국인의 생각을 담은 데이터는{' '}
            <span className="font-bold">
              공공의 창에서 제공하고 빠띠가 개발
            </span>
            합니다. <br />
          </h3>
        </div>
        <button className="w-44 h-12 bg-primary text-white rounded-lg hover:bg-primary2">
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
