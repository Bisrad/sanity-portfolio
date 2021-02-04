module.exports = {
  siteMetadata: {
    title: `Dev_Bread`,
    description: `My Development Portfolio`,
    author: `Brad Thompson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'epcq1grr',
        dataset: 'production',
        token: process.env.MY_SANITY_TOKEN,
        start_url: `/`,
        background_color: `#11202E`,
        theme_color: `#11202E`,
        icon: `web/src/images/favicon-32x32.png`,
      },
    },
  ],
}
