/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Justin Or`,
    titleTemplate: `%s | Personal Portfolio`,
    description: `Built using Gatsby, Theme-ui and MDX`,
    siteUrl: `https://justinor.dev`, // Cannot include a trailing slash
    image: `/images/macbook.jpg`,
    siteAuthor: `Justin Or`,
    siteAuthorUrl: `https://justinor.dev`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `@gvrs/gatsby-transformer-blurhash`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/content/project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          // {
          //   resolve: `gatsby-remark-katex`,
          // },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        // preset: '@theme-ui/preset-funk',
      },
    },
    {
      resolve: "gatsby-theme-style-guide",
      options: {
        // sets path for generated page
        basePath: "/design-system",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout.tsx`),
      },
    },
  ],
}
