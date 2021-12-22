import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
      <section className="md:max-w-content m-auto pt-6 md:pt-12 pb-24">
        <section>
          <h1 className="text-2xl font-bold text-coolgray800">
            한국인의 생각이란?
          </h1>
          <p className="text-coolgray600">
            투명성과 공공성을 확대하여 더 신뢰할 수있는 사회를 만들기 위해
            빠띠와 공공의창 공동기획으로 개발된 사이트입니다.
          </p>
        </section>
        <section className="md:flex gap-7">
          <div className="flex-1">
            <div></div>
            <p className="text-coolgray600 bg-coolgray100 p-6 h-full border-t border-coolgray600">
              2016년 비영리 공공조사가 필요하다는 데 뜻을 모아 출범했다.
              리얼미터, 리서치뷰, 우리리서치, 리서치DNA, 조원씨앤아이,
              코리아스픽스, 티브릿지, 한국사회여론연구소, 한국여론연구소,
              피플네트웍스리서치, 서던포스트, 세종리서치, 소상공인연구소, DPI,
              지방자치데이터연구소 등 여론조사·데이터분석·숙의토론 관련 회사가
              모였다. 정부나 기업 의뢰를 받지 않고 비용은 십시일반 자체 조달해
              의뢰자 없는 공공조사를 하고 있다.
            </p>
          </div>
          <div className="flex-1">
            <div></div>
            <p className="text-coolgray600 bg-coolgray100 p-6 h-full border-t border-coolgray600">
              민주주의를 혁신하고 사회의 여러 영역으로 확산하기 위해 툴킷,
              플랫폼, 커뮤니티를 만드는 민주주의 활동가들의 협동조합입니다.
              디지털 기술을 활용해 신뢰와 협력을 위한 플랫폼을 만들고, 이에
              기반한 새로운 소통과 협력의 방식을 확산하기 위해 툴킷, 커뮤니티를
              개발하고 운영합니다. 민주주의플랫폼을 오픈소스로 만들어 시민
              누구나 일상에서 활용할 수 있게 보급하고 있습니다. 또한 정부, 기관,
              단체와 협력하여 새로운 방식의 플랫폼(데이터퍼블릭, 카누, 믹스,
              타운홀, 팩트체크넷)을 만드는 다양한 프로젝트를 진행하고 있습니다.
            </p>
          </div>
        </section>
        <h1 className="mt-16 text-xl text-coolgray800">함께하는 협력단체</h1>
        <div className="w-full md:grid md:grid-cols-3 mt-8">
          {Array(14)
            .fill(0)
            .map(() => (
              <div className="text-center h-40">단체 이미지</div>
            ))}
        </div>
      </section>
    </Layout>
  )
}
