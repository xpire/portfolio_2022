import React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXThemeProvider, MDXProviderComponents } from "../components/style/MDXComponents"
import {PageThemeProvider} from "../components/style/PageStyle"
import { Typography, Link, Container } from "@mui/material"
import styled from "styled-components"
import PropTypes from "prop-types"

const BlogTemplateStyles = styled.div`
  .post__body {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`

const BlogTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = getImage(image.childImageSharp.gatsbyImageData)
  console.log({date})
  return (
  <PageThemeProvider>
    <Container maxWidth="lg">
        <Link component={GatsbyLink} to="/">
          Back to all posts
        </Link>
        <hr class="separator" />
        <Typography variant="button">
          <span>{date}</span>
        </Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h3">
          <span>Blog</span>
        </Typography>

        <GatsbyImage image={img} alt="Blog Post" />
        <BlogTemplateStyles>
          <MDXThemeProvider>
            <MDXProvider
             components={MDXProviderComponents}
             >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </MDXThemeProvider>
        </BlogTemplateStyles>
        <hr class="separator" />

        <hr class="separator separator__large" />
    </Container>
   </PageThemeProvider>
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      slug
      body
    }
  }
`

export default BlogTemplate

BlogTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.object,
}
