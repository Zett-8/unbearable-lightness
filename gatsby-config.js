module.exports = {
  siteMetadata: {
    title: `Unbearable Lightness`,
    description: `add desc`,
    author: `Toshiki Kamei`,
    url: 'https://url.sample.com',
    ogImage: '',
    twitterImage: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300', '400', '500', '600', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unbearable Lightness`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: ['*******'],
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //       // Setting this parameter is also optional. DNT = do not track
    //       respectDNT: false,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: [],
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
