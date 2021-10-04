import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout>
      <div>
        <h1>asdfasdfasdfasdf</h1>
        <p>asdfasdfasdf</p>
        <p>asdfasdfasdf</p>
        <p>asdfasdfasdf</p>
      </div>
      <div
        className="p-6
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        flex
        items-center
        space-x-4"
      >
        <p className="text-gray-900">Tailwind test</p>

        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </Layout>
  )
}
