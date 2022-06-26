import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Seo, HeadlessWPPageContent } from '../components/components'

const HeadlessWPPage = ({
  data: {
    wpPage: {
      featuredImage: {
        altText,
        node: {
          localFile: {
            childImageSharp: { ogImg, twitterImg },
          },
        },
      },
      seo,
      schemaMarkup: { schemaMarkup },
    },
  },
}) => (
  <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
      ogImg={ogImg.src}
      ogImgAltText={altText}
      twitterImg={twitterImg.src}
    />
    <HeadlessWPPageContent />
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
  </Layout>
)

export default HeadlessWPPage

export const query = graphql`
  query HeadlessWPPageQuery {
    wpPage(title: { eq: "Headless WordPress Developer" }) {
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              ogImg: resize(
                cropFocus: ATTENTION
                height: 630
                width: 1200
                quality: 90
              ) {
                src
              }
              twitterImg: resize(
                cropFocus: ATTENTION
                height: 120
                width: 120
                quality: 90
              ) {
                src
              }
            }
          }
        }
      }
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
