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
      },
      backgroundColor: {
        primary: '#2644d7',
        primary2: '#1635c5',
        coolgray100: '#f3f4f6',
      },
      borderColor: {
        coolgray400: '#9ca3af',
      },
      minWidth: {
        pcHeader: 431,
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
