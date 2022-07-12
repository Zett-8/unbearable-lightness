import type { GatsbyConfig } from 'gatsby'
import { theme } from './src/styles/theme'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Unbearable Lightness`,
    description: `add desc`,
    author: `Toshiki Kamei`,
    url: 'https://url.sample.com',
    ogImage: '',
    twitterImage: '',
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
              variants:
                process.env.NODE_ENV === 'development'
                  ? ['100', '300', '400', '500', '700', '900']
                  : Object.keys(theme.font.weight),
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unbearable Lightness`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: theme.color.backgroundWhite,
        theme_color: theme.color.theme,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

export default config
