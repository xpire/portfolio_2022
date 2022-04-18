/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Koop`,
    titleTemplate: `%s | A simple MDX blog`,
    description: `Built using GatsbyJS and serving content using markdown`,
    siteUrl: `https://koop-blog.netlify.app`, // Cannot include a trailing slash
    image: `/images/macbook.jpg`,
    siteAuthor: `Morgan Baker`,
    siteAuthorUrl: `https://www.morganbaker.dev`,
    twitterUsername: `@twitter`,
    facebookName: `https://www.facebook.com`,
    instagramName: `https://www.instagram.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
