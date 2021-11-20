import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function TagList({ selected }) {
  const data = useStaticQuery(graphql`
    query tags {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div className="mt-8">
      <div className="mt-6">
        {data.allMdx.group.map((tag) => {
          return (
            <Link to={`/tags/${tag.tag}`}>
              <div className="bg-coolgray100 text-sm text-coolgray700 rounded-xl px-2 py-1 mr-2 mb-1 inline-block">
                {tag.tag} {/* 게시물 {tag.totalCount}개 */}
                {selected == tag.tag ? 'selected' : ''}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
