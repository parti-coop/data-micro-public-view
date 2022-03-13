import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { StaticImage } from 'gatsby-plugin-image'

export default function about() {
  return (
    <Layout>
      <SEO
        title={'한국인의 생각이란?'}
        description={
          '투명성과 공공성을 확대하여 더 신뢰할 수있는 사회를 만들기 위해 빠띠와 공공의창 공동기획으로 개발된 사이트입니다.'
        }
      />
      <section className="md:max-w-content m-auto pt-6 md:pt-12 pb-24">
        <section>
          <h1 className="text-aboutHeader font-bold text-coolgray800 leading-10">
            한국인의 생각이란?
          </h1>
          <p className="text-lg leading-7 text-coolgray600 mt-6">
            투명성과 공공성을 확대하여 더 신뢰할 수있는 사회를 만들기 위해
            빠띠와 공공의창 공동기획으로 개발된 사이트입니다.
          </p>
        </section>
        <section className="md:flex gap-7 relative">
          <div className="flex-1">
            <div className="flex justify-center items-center h-40">
              <div>
                <StaticImage
                  width={180}
                  src={`../../static/organization/publicView.webp`}
                  alt="공공의창"
                />
              </div>
            </div>
            <p className="text-lg text-coolgray600 bg-coolgray100 p-6 h-auto border-t border-coolgray600 min-h-about">
              2016년 비영리 공공조사가 필요하다는 데 뜻을 모아 출범했다.
              리얼미터, 리서치뷰, 우리리서치, 리서치DNA, 조원씨앤아이,
              코리아스픽스, 티브릿지, 한국사회여론연구소, 한국여론연구소,
              피플네트웍스리서치, 서던포스트, 세종리서치, 소상공인연구소, DPI,
              지방자치데이터연구소 등 여론조사·데이터분석·숙의토론 관련 회사가
              모였다. 정부나 기업 의뢰를 받지 않고 비용은 십시일반 자체 조달해
              의뢰자 없는 공공조사를 하고 있다.
            </p>
          </div>
          <div className="absolute mx-auto hidden md:flex w-full h-40 items-center">
            <img
              className="mx-auto my-0 w-ximage h-ximage"
              src="/icons/ximage.webp"
              alt="colaborate-icon"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-center items-center h-40">
              <div>
                <StaticImage
                  width={180}
                  src={`../../static/Parti.svg`}
                  alt="빠띠"
                />
              </div>
            </div>
            <p className="text-lg text-coolgray600 bg-coolgray100 p-6 h-auto border-t border-coolgray600">
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
        <h1 className="mt-16 text-2xl text-coolgray800">함께하는 협력단체</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 mt-8 border-t border-l border-r md:border-r-0 md:border-t md:border-l border-coolgray300">
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://www.realmeter.net/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/realmeter.webp`}
              width={200}
              alt={'리얼미터'}
            />
            <div className="w-full absolute bottom-4">리얼미터</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="https://www.facebook.com/researchview/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/researchView.webp`}
              width={100}
              alt={'리서치 뷰'}
            />
            <div className="w-full absolute bottom-4">리서치 뷰</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://www.urir.kr/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/wooriResearch.webp`}
              width={200}
              alt={'우리리서치'}
            />
            <div className="w-full absolute bottom-4">우리리서치</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://www.jowoncni.com/html/index.html"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/jowoncni.webp`}
              width={200}
              alt={'조원씨앤아이'}
            />
            <div className="w-full absolute bottom-4">조원씨앤아이</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://kspeaks.kr/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/koreaSpeaks.webp`}
              width={200}
              alt={'코리아스픽스'}
            />
            <div className="w-full absolute bottom-4">코리아스픽스</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://tbridge.kr/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/tBridge.webp`}
              width={200}
              alt={''}
            />
            <div className="w-full absolute bottom-4">티브릿지</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://ksoi.org/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/ksoi.webp`}
              width={200}
              alt={'한국사회여론연구소'}
            />
            <div className="w-full absolute bottom-4">한국사회여론연구소</div>
          </a>
          <a className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center">
            <div className="text-2xl text-black font-bold">한국여론연구소</div>
            <div className="w-full absolute bottom-4">한국여론연구소</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="https://www.pnresearch.net/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/pnr.webp`}
              width={180}
              alt={'피플네트웍스리서치'}
            />
            <div className="w-full absolute bottom-4">피플네트웍스리서치</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://www.southernpost.co.kr/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/southernPost.webp`}
              width={200}
              alt={'서던포스트'}
            />
            <div className="w-full absolute bottom-4">서던포스트</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://www.sejongr.kr/wordpress/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/sejongResearch.webp`}
              width={140}
              alt={'세종리서치'}
            />
            <div className="w-full absolute bottom-4">세종리서치</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="http://microbiz.or.kr/"
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/kmbi.webp`}
              width={180}
              alt={'소상공인연구소'}
            />
            <div className="w-full absolute bottom-4">소상공인연구소</div>
          </a>
          <a className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center">
            <div className="text-3xl text-black font-bold">DPI</div>
            <div className="w-full absolute bottom-4">DPI</div>
          </a>
          <a
            className="text-center h-40 border-b md:border-r md:border-b border-coolgray300 text-coolgray600 relative flex justify-center items-center"
            href="https://www.lgrc.co.kr/ 
          "
            target="_blank"
          >
            <StaticImage
              src={`../../static/organization/jibangjachi.webp`}
              width={220}
              alt={'지방자치데이터연구소'}
            />
            <div className="w-full absolute bottom-4">지방자치데이터연구소</div>
          </a>
        </div>
      </section>
    </Layout>
  )
}
