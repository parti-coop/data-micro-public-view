import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Tag from './Tag'

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
    <div className="md:flex-1 my-4">
      <div>
        <Tag tag={'전체'} selected={selected} />
        {data.allMdx.group.map((tag) => {
          return <Tag tag={tag.tag} selected={selected} />
        })}
      </div>
    </div>
  )
}
