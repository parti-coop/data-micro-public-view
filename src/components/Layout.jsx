import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  const googletAnalytics = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WM3QY4R7HF"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-WM3QY4R7HF', {
        'linker': {
        'domains': ['public-view.kr', 'public-view.org']
        }
      });
    </script>
  `

  return (
    <div className="layout">
      <Navbar />
      <div className="content md:p-0">{children}</div>
      <footer>
        <div className="text-coolgray500 text-center py-8 border-t border-coolgray400">
          Copyright by{' '}
          <span className="text-coolgray700 font-bold">빠띠 & 공공의창</span>{' '}
        </div>
      </footer>
      <div dangerouslySetInnerHTML={{ __html: googletAnalytics }} />
    </div>
  )
}
