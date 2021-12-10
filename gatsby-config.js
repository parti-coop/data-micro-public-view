/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        // gatsbyRemarkPlugins: [
        //   `gatsby-remark-prismjs`,
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 1000,
        //       linkImagesToOriginal: false,
        //       withWebp: true,
        //     },
        //   },
        // ],
      },
    },
    'gatsby-plugin-emotion',
  ],
  siteMetadata: {
    title: '한국인의 생각',
    description: '한국인의 생각 설명',
    copyright: 'This is copyright 2021 공공의창 & 빠띠',
    image: '/meta.png',
    contact: 'contact@parti.coop',
  },
}
