import React from "react"
import { graphql } from "gatsby"
import BlurHashImage from "../components/style/BlurHashImage"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

const PostTemplate = ({ data }) => {
  deckDeckGoHighlightElement()
  const { title, date, image, type, stack, code, live } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.gatsbyImageData
  console.log({ type, stack, code, live })
  return (
    <>
      <span>{date}</span>

      <code>/project</code>
      {title}
      <BlurHashImage
        gatsbyImageData={img}
        blurHash={image.childImageSharp.blurHash}
        alt={`${title} project image`}
      />

      {type && <span>{type}</span>}
      {stack && (
        <>
          {stack.map((s) => (
            <span>{s}</span>
          ))}
        </>
      )}
      {code && <a href={code}>Repository</a>}
      {live && <a href={live}>View Site</a>}

      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        type
        stack
        code
        live
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
  type: PropTypes.string,
  stack: PropTypes.array,
  code: PropTypes.string,
  live: PropTypes.string,
}
