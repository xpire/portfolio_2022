import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {Grid, Typography, Container, Card, CardContent, CardActionArea} from '@mui/material';
import 'pollen-css';

const getPosts = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
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

// allMdx(
//   sort: { fields: frontmatter___date, order: DESC }
//   filter: {fileAbsolutePath: {regex: "/project/"}}
// )

const Index = () => {
  const response = useStaticQuery(getPosts)

  const posts = response.allMdx.edges

  return (
    <Container maxWidth="xl">
    <Typography variant="button">Hey, my name is</Typography>
    <Typography variant="h3">Justin Or</Typography>
    <Typography>I'm interested in maths, algorithms and everything in between.</Typography>
    <Grid container spacing={2}>
      {posts.map(post => (
      <Grid item xs={12} sm={6}>
        <Card>
          <CardActionArea LinkComponent={Link} to={`${/blog/.test(post.node.fileAbsolutePath) ? "blog" : "project"}/${post.node.slug}`}>
          {/* <CardMedia component={GatsbyImage} src={getImage(post.node.frontmatter.image.childImageSharp.gatsbyImageData)}/>
          <GatsbyImage image={getImage(post.node.frontmatter.image.childImageSharp.gatsbyImageData)}/> */}
            <CardContent>
              <Typography variant="h5">{post.node.frontmatter.title}</Typography>
              <Typography gutterBottom>{post.node.excerpt}</Typography>
              <Typography>{post.node.frontmatter.author}</Typography>
              <Typography>{post.node.frontmatter.date}</Typography>
            </CardContent>
          </CardActionArea>
          {/* <span>{post.node.frontmatter.image}</span> */}
        </Card>
      </Grid>
      ))}
    </Grid>
    </Container>
  )
}

export default Index
