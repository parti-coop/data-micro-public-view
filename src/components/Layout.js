import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content p-6 md:p-0">{children}</div>
      <footer>
        <div className="text-coolgray500 text-center py-8 border-t border-coolgray400">
          Copyright by{' '}
          <span className="text-coolgray700 font-bold">빠띠 & 공공의창</span>{' '}
        </div>
      </footer>
    </div>
  )
}
