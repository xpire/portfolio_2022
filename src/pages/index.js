import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Latex from "react-latex-next"
import { Grid, Themed, Box } from "theme-ui"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import ListItem from "../components/common/ListItem"
import { Section } from "../components/common/Common"
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
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection projects={projects} />
      <BlogSection blogs={blogs} />
    </>
  )
}

const boxVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const textVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2 },
  },
}

const HeroSection = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
    initialInView: true,
  })
  return (
    <Section>
      <Grid columns={[1, null, 2]}>
        <Box ref={ref}>
          <MigurdiaImage fill={"var(--theme-ui-colors-text)"} inView={inView} />
        </Box>
        <Box>
          <motion.div
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={textVariants}>
              <Themed.h4
                sx={{
                  fontFamily: "heading",
                }}
              >
                Hey there, my name is
              </Themed.h4>
            </motion.div>
            <motion.div variants={textVariants}>
              <Themed.h1 sx={{ m: 0 }}>Justin Or.</Themed.h1>
            </motion.div>
            <motion.div variants={textVariants}>
              <Themed.h5>
                I'm a Software Engineer passionate about <code>algorithms</code>
                , <Latex>$maths$</Latex> and everything in between.
              </Themed.h5>
            </motion.div>
          </motion.div>
        </Box>
      </Grid>
    </Section>
  )
}

const AboutSection = () => {
  return (
    <Section title="About Me">
      <Grid columns={[1, null, 2]} gap={[3, null, 5]}>
        <Box
          sx={{
            alignSelf: "center",
            justifySelf: ["center", null, "flex-end"],
          }}
        >
          <MLCLogo />
        </Box>
        <Box>
          <Themed.p>
            Through my internship at MLC and NAB, I went from 0 experience in
            frontend development to being the frontend developer for my team's
            final year capstone project. I also picked up a plethora Dev Ops
            skills, from Docker and Kubernetes, to Jenkins and TeamCity CI/CD
            pipelines.
          </Themed.p>
        </Box>
        <Box
          sx={{
            gridColumn: [1, null, 2],
            alignSelf: "center",
            justifySelf: ["center", null, "flex-start"],
          }}
        >
          <OptiverLogo />
        </Box>
        <Box sx={{ gridColumn: [1, null, 1], gridRow: [null, null, 2] }}>
          I'm currently working as a Graduate Software Engineer at Optiver.
          Coding C++ in a High Frequency Trading company has taught me a lot
          about performance and latency in the most globally competitive
          environments.
        </Box>
      </Grid>
    </Section>
  )
}

const ProjectSection = ({ projects }) => {
  return (
    <Section title="Projects">
      <Themed.h5>Here are some of the things I've been working on.</Themed.h5>
      <Grid columns={[1, null, 2]} gap={[3, null, 5]}>
        {projects.map((post, index) => {
          const featuredPost = index === 0
          const gridcol = index % 2 === 1 ? 1 : 2
          return (
            <Box
              sx={{
                gridColumn: [1, null, featuredPost ? "1 / 3" : gridcol],
              }}
              key={`project/${post.node.slug}`}
            >
              <ListItem
                gatsbyImageData={
                  post.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                blurHash={post.node.frontmatter.image.childImageSharp.blurHash}
                slug={`project/${post.node.slug}`}
                title={post.node.frontmatter.title}
                excerpt={post.node.excerpt}
              />
            </Box>
          )
        })}
      </Grid>
    </Section>
  )
}

const BlogSection = ({ blogs }) => {
  return (
    <Section title="Blog">
      <Themed.h5>
        Here are some interesting things I've blogged about.
      </Themed.h5>
      <Grid columns={[1, null, 2]} gap={[3, null, 5]}>
        {blogs.map((post) => {
          return (
            <Box key={`blog/${post.node.slug}`}>
              <ListItem
                gatsbyImageData={
                  post.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                blurHash={post.node.frontmatter.image.childImageSharp.blurHash}
                slug={`blog/${post.node.slug}`}
                title={post.node.frontmatter.title}
                excerpt={post.node.excerpt}
              />
            </Box>
          )
        })}
      </Grid>
    </Section>
  )
}

export default Index
