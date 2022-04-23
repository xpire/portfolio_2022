import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import BlurHashImage from "../components/style/BlurHashImage"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  MDXThemeProvider,
  MDXProviderComponents,
} from "../components/style/MDXComponents"
import {
  PageContainer,
  Section,
  CodePrefix,
} from "../components/style/PageStyle"
import { Typography } from "@mui/material"
import PropTypes from "prop-types"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

const PostTemplate = ({ data }) => {
  deckDeckGoHighlightElement()
  const { title, date, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.gatsbyImageData
  console.log({ date })
  return (
    <PageContainer>
      <Section>
        <Typography variant="button">
          <span>{date}</span>
        </Typography>
        <Typography variant="h4">
          <code>
            <CodePrefix>/blog</CodePrefix>
          </code>
        </Typography>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Section>
          <BlurHashImage
            gatsbyImageData={img}
            blurHash={image.childImageSharp.blurHash}
            alt={`${title} blog image`}
          />
        </Section>
        <MDXThemeProvider>
          <MDXProvider components={MDXProviderComponents}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </MDXThemeProvider>
      </Section>
    </PageContainer>
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
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: NONE
              aspectRatio: 1.777
            )
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
