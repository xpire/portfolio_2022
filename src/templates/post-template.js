import React from "react"
import { graphql } from "gatsby"
import BlurHashImage from "../components/style/BlurHashImage"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Themed, Box, ThemeProvider, Grid } from "theme-ui"
import PropTypes from "prop-types"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import MDXTheme from "../components/style/MDXTheme"

const InfoSection = ({ title, data, maxRows, link = false }) => (
  <Grid
    columns={[2, 1]}
    sx={{
      gridTemplateRows: `repeat(${maxRows}, 1fr)`,
      alignSelf: "baseline",
    }}
  >
    <Box>
      <Themed.h6
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          mb: 0,
          mt: 0,
        }}
      >
        {title}
      </Themed.h6>
    </Box>
    {data.map((d) => (
      <Box sx={{ gridColumn: [2, 1] }}>
        <Themed.h6 sx={{ m: 0 }}>
          {link ? (
            <Themed.a target="_blank" rel="noopener" href={d}>
              here
            </Themed.a>
          ) : (
            d
          )}
        </Themed.h6>
      </Box>
    ))}
  </Grid>
)

const PostTemplate = ({ data }) => {
  deckDeckGoHighlightElement()
  const { title, date, image, type, stack, code, live } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.gatsbyImageData
  console.log({ type, stack, code, live })
  const maxRows = stack.length
  return (
    <>
      <Themed.h6 sx={{ fontWeight: "light", m: 0 }}>{date}</Themed.h6>
      <Themed.h4 sx={{ color: "muted", m: 0 }}>
        <Themed.code>/project</Themed.code>
      </Themed.h4>
      <Themed.h2 sx={{ mt: 0 }}>{title}</Themed.h2>
      <BlurHashImage
        gatsbyImageData={img}
        blurHash={image.childImageSharp.blurHash}
        alt={`${title} project image`}
      />
      <Grid columns={[1, 2, 4]} sx={{ p: 4 }}>
        {type && <InfoSection title="Type" data={[type]} maxRows={1} />}
        {stack && <InfoSection title="Stack" data={stack} maxRows={maxRows} />}
        {code && <InfoSection title="Code" data={[code]} maxRows={1} link />}
        {live && <InfoSection title="Live" data={[live]} maxRows={1} link />}
      </Grid>
      <ThemeProvider theme={MDXTheme}>
        <MDXRenderer>{body}</MDXRenderer>
      </ThemeProvider>
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
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
