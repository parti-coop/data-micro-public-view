import { Link } from 'gatsby'

export default function Tag({ tag, selected }) {
  return (
    <Link to={tag == '전체' ? '/#tags' : `/tags/${tag}#tags`}>
      <div
        className={`bg-coolgray100 text-sm text-coolgray700 rounded-xl px-2 py-1 mr-2 mb-1 md:mb-0 inline-block ${tag === selected ? 'font-bold' : ''
          }`}
      >
        {tag}
      </div>
    </Link>
  )
}
