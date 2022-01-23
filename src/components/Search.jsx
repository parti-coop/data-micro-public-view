import React from 'react'
import { useState } from 'react'

const SearchContent = ({ onChange }) => {
  const [value, setValue] = useState('')
  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onChange(value)
    }
  }
  return (
    <>
      <div className="md:flex-end mt-6 mb-4 md:mt-0 md:mb-0">
        <input
          type="text"
          placeholder="검색"
          onChange={(e) => setValue(e?.target?.value)}
          onKeyPress={onKeyPress}
          className="py-3 px-6 border border-coolgray400 rounded-lg mr-2"
        />
        <button
          type="submit"
          onClick={() => onChange(value)}
          className="py-3 px-6 bg-button border border-coolgray400 rounded-lg"
        >
          검색하기
        </button>
      </div>
    </>
  )
}

export default SearchContent
