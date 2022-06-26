import ReactHtmlParser from 'react-html-parser'

export const processWordPressPost = postData => {
  return {
    title: postData.title,
    author: postData.author.node.name,
    date: postData.date,
    featuredImg: {
      src: postData.featuredImage.node.localFile.childImageSharp.featuredImg,
      altText: postData.featuredImage.altText,
    },
    excerpt: postData.excerpt,
    content: postData.content,
    category: postData.categories.nodes[0].name,
    categories: postData.categories,
    tags: postData.tags.nodes.map(tag => tag.name),
    seo: {
      title: postData.seo.title,
      canonical: postData.seo.canonical,
      metaDescription: postData.seo.metaDesc,
    },
    ogImg: postData.featuredImage.node.localFile.childImageSharp.ogImg,
    twitterImg:
      postData.featuredImage.node.localFile.childImageSharp.twitterImg,
    uri: postData.uri,
  }
}

export const chooseCategoryColor = category => {
  let color

  switch (category) {
    case 'Headless Wordpress':
      color = 'bg-purple-200 text-purple-600'
      break
    case 'Blockchain':
      color = 'bg-gray-200 text-gray-600'
      break
    case 'Digital Marketing':
      color = 'bg-emerald-200 text-emerald-600'
      break
    case 'SEO':
      color = 'bg-red-200 text-red-600'
      break
    case 'Privacy First Marketing':
      color = 'bg-orange-200 text-orange-700'
      break
    default:
      color = 'bg-purple-200 text-purple-600'
  }

  return color
}

export const chooseTagColor = tag => {
  let color

  switch (tag) {
    case 'Web Development':
      color = 'bg-red-300'
      break
    case 'React':
      color = 'bg-sky-300'
      break
    case 'Gatsby':
      color = 'bg-purple-300'
      break
    case 'Headless WordPress':
      color = 'bg-blue-300'
      break
    case 'Headless CMS':
      color = 'bg-emerald-300'
      break
    case 'Jamstack':
      color = 'bg-pink-500'
      break
    case 'GraphQL':
      color = 'bg-gray-300'
      break
    case 'SEO':
      color = 'bg-orange-300'
      break
    case 'Digital Marketing':
      color = 'bg-yellow-300'
      break
    case 'Blockchain':
      color = 'bg-gray-300'
      break
    case 'Bitcoin':
      color = 'bg-orange-300'
      break
    case 'NFTs':
      color = 'bg-green-300'
      break
    default:
      color = 'bg-purple-300'
  }

  return color
}

export const getHeadingsFromMarkdown = markdown => {
  const htmlElements = ReactHtmlParser(markdown).filter(el => el !== null)
  let h2s = htmlElements.filter(el => el.type === 'h2')
  let h3s = htmlElements.filter(el => el.type === 'h3')

  const headings = [...h2s, ...h3s]
    .sort((a, b) => a.key - b.key)
    .map(heading => {
      const classes =
        heading.type === 'h2'
          ? 'text-md my-1 cursor-pointer font-garamond font-semibold text-gray-700 md:text-lg'
          : 'text-md my-1 cursor-pointer font-garamond font-semibold text-gray-600 md:text-md m-2'

      return {
        heading: heading.props.children[0],
        key: heading.key,
        classes,
        slug: heading.props.id,
      }
    })

  return headings
}
