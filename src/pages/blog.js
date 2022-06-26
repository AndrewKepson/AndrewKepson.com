import React from 'react'
import { graphql } from 'gatsby'
import { useWordPressPosts } from '../hooks'

import { Layout, Seo, BlogPageContent } from '../components/components'

const BlogPage = ({
  data: {
    wpPage: {
      seo,
      schemaMarkup: { schemaMarkup },
    },
  },
}) => {
  const chronologicalPosts = useWordPressPosts()

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={seo.canonical}
      />
      <BlogPageContent posts={chronologicalPosts} category="All Categories" />
      <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPageQuery {
    wpPage(title: { eq: "Blog" }) {
      id
      seo {
        title
        metaDesc
        canonical
      }
      schemaMarkup {
        schemaMarkup
      }
    }
  }
`
