import React from "react"
import { graphql } from "gatsby"
import BlurHashImage from "../components/style/BlurHashImage"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import { Themed, ThemeProvider } from "theme-ui"

import MDXTheme from "../components/style/MDXTheme"

const PostTemplate = ({ data }) => {
  const { title, date, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.gatsbyImageData
  return (
    <>
      <Themed.h6 sx={{ fontWeight: "light", m: 0 }}>{date}</Themed.h6>
      <Themed.h4 sx={{ color: "muted", m: 0 }}>
        <Themed.code>/blog</Themed.code>
      </Themed.h4>
      <Themed.h2 sx={{ mt: 0 }}>{title}</Themed.h2>
      <BlurHashImage
        gatsbyImageData={img}
        blurHash={image.childImageSharp.blurHash}
        alt={`${title} blog image`}
      />
      <ThemeProvider theme={MDXTheme}>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query getBlog($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            blurHash(componentX: 3, componentY: 4, width: 32) {
              base64Image
              hash
            }
          }
        }
      }
      slug
      body
    }
  }
`

export default PostTemplate

PostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.object,
}
