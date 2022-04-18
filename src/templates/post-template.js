import React from "react"
import { graphql } from "gatsby"
import BlurHashImage from "../components/style/BlurHashImage"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import {
  MDXThemeProvider,
  MDXProviderComponents,
} from "../components/style/MDXComponents"
import {
  PageContainer,
  Section,
  CodePrefix,
  StyledLink,
} from "../components/style/PageStyle"
import { Typography, Grid, styled as muiStyled } from "@mui/material"
import PropTypes from "prop-types"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

const ProjectOverview = styled.div`
  margin: var(--size-10) auto;
`

const ProjectSubtext = muiStyled(Typography)`
color: var(--color-grey-500);
`

const PostTemplate = ({ data }) => {
  deckDeckGoHighlightElement()
  const { title, date, image, type, stack, code, live } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.gatsbyImageData
  console.log({ type, stack, code, live })
  return (
    <PageContainer>
      <Section>
        <Typography variant="button">
          <span>{date}</span>
        </Typography>
        <Typography variant="h4">
          <code>
            <CodePrefix>/project</CodePrefix>
          </code>
        </Typography>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Section>
          <BlurHashImage
            gatsbyImageData={img}
            blurHash={image.childImageSharp.blurHash}
            alt="Blog Post"
          />
        </Section>
        <ProjectOverview>
          <Grid container>
            {type && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="overline" gutterBottom>
                    Type
                  </Typography>
                </Grid>
                <Grid item>
                  <ProjectSubtext variant="h6">{type}</ProjectSubtext>
                </Grid>
              </Grid>
            )}
            {stack && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="overline" gutterBottom>
                    Stack
                  </Typography>
                </Grid>
                {stack.map((s) => (
                  <Grid item>
                    <ProjectSubtext variant="h6">{s}</ProjectSubtext>
                  </Grid>
                ))}
              </Grid>
            )}
            {code && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="overline" gutterBottom>
                    Code
                  </Typography>
                </Grid>
                <Grid item>
                  <StyledLink href={code}>
                    <ProjectSubtext variant="h6">Repository</ProjectSubtext>
                  </StyledLink>
                </Grid>
              </Grid>
            )}
            {live && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="overline" gutterBottom>
                    Live
                  </Typography>
                </Grid>
                <Grid item>
                  <StyledLink href={live}>
                    <ProjectSubtext variant="h6">View Site</ProjectSubtext>
                  </StyledLink>
                </Grid>
              </Grid>
            )}
          </Grid>
        </ProjectOverview>
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
