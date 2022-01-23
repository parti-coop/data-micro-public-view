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
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
