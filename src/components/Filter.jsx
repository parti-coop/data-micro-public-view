import React, { useState } from 'react'
import SearchContent from './Search'
import TagList from './TagList'

const Filter = ({ tag, onQueryChange }) => {
  return (
    <>
      <div className="md:flex md:items-center border-b border-coolgray400">
        <TagList selected={tag} />
        <SearchContent onChange={onQueryChange} />
      </div>
    </>
  )
}

export default Filter
