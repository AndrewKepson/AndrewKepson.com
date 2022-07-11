require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Andrew Kepson`,
    description: `Andrew Kepson's personal website for portfolio pieces and blog posts.`,
    author: `Andrew Kepson`,
    siteUrl: process.env.FRONT_END_URL,
  },
  trailingSlash: 'always',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_UNIVERSAL_TRACKING_CODE,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_TRACKING_ID],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap',
        excludes: [
          `/writing/`,
          `/writing/a-title-compelling-enough`,
          `/writing/how-nike-is-using-blockchain-nike-cryptokicks`,
          `/writing/sample1`,
          `/writing/van-in-snowmass`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://andrewkepson.com`,
        policy: [
          { userAgent: '*', allow: '/', disallow: ['/writing', '/static'] },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WP_GRAPHQL_ENDPOINT,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          allow404Images: true,
          allow401Images: true,
        },
        schema: {
          typePrefix: `Wp`,
        },
        // searchAndReplace: [
        //   {
        //     search: process.env.WP_URL,
        //     replace: process.env.FRONT_END_URL,
        //   },
        // ],
        html: {
          useGatsbyImage: true,
          generateWebpImages: true,
          imageMaxWidth: 800,
          imageQuality: 90,
          createStaticFiles: true,
          placeholderType: `blurred`,
        },
        type: {
          Post: {
            limit: process.env.NODE_ENV === `development` ? 50 : 5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
            },
            {
              family: `Work Sans`,
            },
            {
              family: `EB Garamond`,
            },
          ],
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `@raae/gatsby-plugin-let-it-snow`,
      options: {
        colors: [`#fbfcfc`, `#e8ecf2`, `#a3b1bc`, `#4e5f6e`],
        intensity: `blizzard`,
        duration: 7,
        season: {
          start: new Date(`December 10, 2021 00:00:10`),
          end: new Date(`December 30, 2021 23:59:50`),
        },
      },
    },
  ],
}
