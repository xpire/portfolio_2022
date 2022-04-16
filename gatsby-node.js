exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
            fileAbsolutePath
            slug
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    // const { slug } = node.frontmatter;
    const slug = node.slug;
    const isBlogRegex = new RegExp(`${__dirname}/content/blog`);
    const isBlog = isBlogRegex.test(node.fileAbsolutePath);
    createPage({
      path: `${isBlog ? "blog" : "project"}/${slug}`,
      component: isBlog ? require.resolve("./src/templates/blog-template.js") : require.resolve("./src/templates/post-template.js"),
      context: {
        slug: slug,
      },
    })
  })
}
