import React from 'react'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { Layout, BlogPageContent, Seo } from '../components/components'

const WordPressCategoryTemplate = ({ data: { wpCategory: category } }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <Seo
        title={category.seo.title}
        description={category.seo.metaDesc}
        canonical={`${siteUrl}${category.uri}`}
      />
      <BlogPageContent
        posts={category.posts.nodes}
        category={category.name}
        updateCategory={category.updateCategory}
      />
    </Layout>
  )
}

export default WordPressCategoryTemplate

export const query = graphql`
  query ($id: String!) {
    wpCategory(id: { eq: $id }) {
      uri
      name
      seo {
        canonical
        metaDesc
        title
      }
      posts {
        nodes {
          uri
          author {
            node {
              name
            }
          }
          title
          featuredImage {
            node {
              altText
              localFile {
                absolutePath
                childImageSharp {
                  gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 200)
                }
              }
            }
          }
          date(formatString: "MMMM Do, YYYY")
          categories {
            nodes {
              name
            }
          }
          status
          uri
          excerpt
        }
      }
    }
  }
`
