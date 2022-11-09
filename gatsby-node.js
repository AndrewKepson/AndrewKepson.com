const path = require('path')
const { slash } = require('gatsby-core-utils')

module.exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect, createSlice },
}) => {
  createRedirect({
    fromPath: '/blog/create-headless-wordpress-source-gatsby-wordpress-api/',
    toPath:
      '/blog/headless-wordpress/create-headless-wordpress-source-gatsby-wordpress-api/',
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/blog/how-and-why-nike-is-using-blockchain/',
    toPath: '/blog/blockchain/how-and-why-nike-is-using-blockchain/',
    isPermanent: true,
  })
  createRedirect({
    fromPath: '/photos/',
    toPath: '/html-sitemap/',
    isPermanent: true,
  })

  const slices = [
    {
      id: `header`,
      componentPath: `./src/components/Header/Header.js`,
      context: { headerContext: `headerContext` },
    },
    {
      id: `footer`,
      componentPath: `./src/components/Footer/Footer.js`,
      context: { footerContext: `footerContext` },
    },
  ]

  slices.forEach(slice =>
    createSlice({
      id: slice.id,
      component: require.resolve(slice.componentPath),
      context: slice.context,
    })
  )

  const result = await graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            uri
            name
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      'Error while running GraphQL query to fetch WordPress data for page generation.'
    )
    return
  }

  const wordPressPosts = result.data.allWpPost.edges
  const wordPressCategories = result.data.allWpCategory.edges.filter(
    category => category.node.name !== 'Uncategorized'
  )

  const wordPressPostTemplate = path.resolve(`./src/templates/wordPressPost.js`)
  const wordPressCategoryTemplate = path.resolve(
    `./src/templates/wordPressCategory.js`
  )

  wordPressPosts.forEach(post =>
    createPage({
      path: post.node.uri,
      component: slash(wordPressPostTemplate),
      context: {
        id: post.node.id,
      },
    })
  )

  wordPressCategories.forEach(category =>
    createPage({
      path: category.node.uri,
      component: slash(wordPressCategoryTemplate),
      context: {
        id: category.node.id,
      },
    })
  )
}
