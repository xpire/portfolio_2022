import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography } from "@mui/material"
import "pollen-css"
import "katex/dist/katex.min.css"
import Latex from "react-latex-next"

import {
  Section,
  PageContainer,
  StyledLink,
} from "../components/style/PageStyle"
import ListItem from "../components/list/ListItem"
import MigurdiaImage from "../images/Migurdia"
import OptiverLogo from "../images/Optiver"
import MLCLogo from "../images/MLC"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  layout: FULL_WIDTH
                  aspectRatio: 1.777
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP]
                )
                blurHash(componentX: 3, componentY: 4, width: 32) {
                  base64Image
                  hash
                }
              }
            }
          }
          excerpt
          slug
          fileAbsolutePath
        }
      }
    }
  }
`

const Index = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  const projects = posts.filter((post) =>
    /\/project\//.test(post.node.fileAbsolutePath)
  )

  const blogs = posts.filter((post) =>
    /\/blog\//.test(post.node.fileAbsolutePath)
  )

  return (
    <PageContainer>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MigurdiaImage />
          </Grid>
          <Grid
            item
            cd={12}
            md={8}
            container
            direction="column"
            justifyContent="center"
          >
            <Grid item>
              <Typography variant="h4">Hey there, my name is</Typography>
              <Typography variant="h1">Justin Or.</Typography>
              <Typography variant="h5">
                I'm a Software Engineer passionate about <code>algorithms</code>
                , <Latex>$maths$</Latex> and everything in between.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Typography variant="h3" gutterBottom>
          About me
        </Typography>

        {/* <Grid container direction="row">
          <Grid item xs={8} sm={6}>
            <Typography gutterBottom>
              As a 2021 UNSW Graduate in Mathematics and Computer Science, I
              enjoy solving problems at the intersection of maths and
              programming.
            </Typography>
          </Grid>
        </Grid> */}
        <Grid container spacing={6}>
          <Grid
            item
            container
            spacing={6}
            direction="row"
            justifyContent="flex-start"
          >
            <Grid item xs={8} sm={6}>
              <Typography gutterBottom>
                Through my internship at MLC and NAB, I went from 0 experience
                in frontend development to being the frontend developer for my
                team's final year capstone project. I also picked up a plethora
                Dev Ops skills, from Docker and Kubernetes, to Jenkins and
                TeamCity CI/CD pipelines.
              </Typography>
            </Grid>
            <Grid item>
              <StyledLink
                gutterBottom
                href="https://www.mlc.com.au"
                target="_blank"
                rel="noopener"
              >
                <MLCLogo />
              </StyledLink>
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={6}
            direction="row"
            justifyContent="flex-end"
          >
            <Grid item>
              <StyledLink
                gutterBottom
                href="https://www.optiver.com"
                target="_blank"
                rel="noopener"
              >
                <OptiverLogo />
              </StyledLink>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Typography variant="body1" gutterBottom>
                I'm currently working as a Graduate Software Engineer at
                Optiver. Coding C++ in a High Frequency Trading company has
                taught me a lot about performance and latency in the most
                globally competitive environments.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6" gutterBottom>
          Here are some of the things I've been working on.
        </Typography>
        <Grid container spacing={8}>
          {projects.map((post, index) => {
            const featuredPost = index === 0 && projects.length % 2 === 1
            return (
              <>
                {post.node.frontmatter.title && (
                  <Grid
                    item
                    sm={12}
                    md={featuredPost ? 12 : 6}
                    key={`project/${post.node.slug}`}
                  >
                    <ListItem
                      gatsbyImageData={
                        post.node.frontmatter.image.childImageSharp
                          .gatsbyImageData
                      }
                      blurHash={
                        post.node.frontmatter.image.childImageSharp.blurHash
                      }
                      slug={`project/${post.node.slug}`}
                      title={post.node.frontmatter.title}
                      excerpt={post.node.excerpt}
                    />
                  </Grid>
                )}
              </>
            )
          })}
        </Grid>
      </Section>
      <Section>
        <Typography variant="h3" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h6" gutterBottom>
          Here are some things I've found interesting and blogged about.
        </Typography>
        <Grid container spacing={8}>
          {blogs.map((post) => (
            <Grid item sm={12} md={6} key={`blog/${post.node.slug}`}>
              <ListItem
                gatsbyImageData={
                  post.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                blurHash={post.node.frontmatter.image.childImageSharp.blurHash}
                slug={`blog/${post.node.slug}`}
                title={post.node.frontmatter.title}
                excerpt={post.node.excerpt}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section>
        <Typography variant="h3" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h5" gutterBottom>
          Feel free to reach out if you're looking for a developer, want to
          connect or have a question.
        </Typography>
        <StyledLink
          gutterBottom
          href="mailto:me@justinor.dev"
          target="_blank"
          rel="noopener"
        >
          <Typography variant="h6" gutterBottom>
            me@justinor.dev
          </Typography>
        </StyledLink>
        <StyledLink
          gutterBottom
          href="https://github.com/xpire"
          target="_blank"
          rel="noopener"
        >
          <Typography variant="h6" gutterBottom>
            github.com/xpire
          </Typography>
        </StyledLink>
        <StyledLink
          gutterBottom
          href="https://linkedin.com/in/justinor/"
          target="_blank"
          rel="noopener"
        >
          <Typography variant="h6" gutterBottom>
            linkedin.com/in/justinor/
          </Typography>
        </StyledLink>
      </Section>
    </PageContainer>
  )
}

export default Index
