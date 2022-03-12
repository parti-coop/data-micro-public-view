module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#2644d7',
        coolgray500: '#6b7280',
        coolgray600: '#4b5563',
        coolgray700: '#374151',
        coolgray800: '#1f2937',
      },
      backgroundColor: {
        primary: '#2644d7',
        primary2: '#1635c5',
        coolgray100: '#f3f4f6',
        button: '#f0f0f0',
      },
      borderColor: {
        coolgray300: '#d1d5db',
        coolgray400: '#9ca3af',
        coolgray600: '#4b5563',
        listButton: '#6B7280',
      },
      minWidth: {
        pcHeader: 431,
      },
      fontFamily: {
        header: ['Black Han Sans'],
      },
      maxWidth: {
        content: '810px',
      },
      maxHeight: {
        header: '488px',
      },
      minHeight: {
        about: '384px',
      },
      fontSize: {
        aboutHeader: '2.4rem',
      },
      width: {
        ximage: '66px',
      },
      height: {
        ximage: '66px',
      },
      margin: {
        headerMobile: '-81px',
      },
      zIndex: {
        minus1: '-1',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
