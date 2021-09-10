import { Link, graphql, useStaticQuery } from 'gatsby'
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
    <header>
      <h2>데이터로 읽는 공공쟁점 사회여론</h2>
      <h1>한국인의 생각</h1>
      <h3>
        투명성과 공공성을 확대하여 더 신뢰할 수 있는 사회를 만들기 위해
        공익데이터를 만듭니다.
      </h3>
      <p>
        빠띠와 공공의창 공동기획으로 <br />
        사회 쟁점에 대한 한국인의 생각을 담은 데이터는 공공의 창에서 제공하고
        빠띠가 개발합니다. <br />
        빠띠 X 공공의창
      </p>
      <button>데이터 다운받기</button>
    </header>
  )
}
