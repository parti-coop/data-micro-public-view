import React from 'react'
import Layout from '../../components/Layout'
import ContentsList from '../../components/ContentsList'

export default function Projects({ data }) {
  return (
    <Layout>
      <div className="p-6 md:p-8">
        <h1 className="text-2xl font-bold text-coolgray800">프로젝트</h1>
        <ContentsList />
      </div>
    </Layout>
  )
}
