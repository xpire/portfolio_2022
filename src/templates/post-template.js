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
  ExternalLink,
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

const ProjectTitleGrid = muiStyled(Grid)`
  margin-bottom: var(--size-3);
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
          <Grid container spacing={2}>
            {type && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <ProjectTitleGrid item>
                  <Typography variant="overline">Type</Typography>
                </ProjectTitleGrid>
                <Grid item>
                  <ProjectSubtext variant="h6">{type}</ProjectSubtext>
                </Grid>
              </Grid>
            )}
            {stack && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <ProjectTitleGrid item>
                  <Typography variant="overline">Stack</Typography>
                </ProjectTitleGrid>
                {stack.map((s) => (
                  <Grid item>
                    <ProjectSubtext variant="h6">{s}</ProjectSubtext>
                  </Grid>
                ))}
              </Grid>
            )}
            {code && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <ProjectTitleGrid item>
                  <Typography variant="overline">Code</Typography>
                </ProjectTitleGrid>
                <Grid item>
                  <ExternalLink href={code} variant="h6">
                    Repository
                  </ExternalLink>
                </Grid>
              </Grid>
            )}
            {live && (
              <Grid item xs={6} sm={2} container direction="column" spacing={1}>
                <ProjectTitleGrid item>
                  <Typography variant="overline">Live</Typography>
                </ProjectTitleGrid>
                <Grid item>
                  <ExternalLink href={live} variant="h6">
                    View Site
                  </ExternalLink>
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
