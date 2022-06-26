import { useStaticQuery, graphql } from 'gatsby'

export const useWordPressPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            tags {
              nodes {
                name
                id
              }
            }
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
                    gatsbyImageData(
                      quality: 90
                      layout: CONSTRAINED
                      height: 200
                    )
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
  `)

  return [...data.allWpPost.edges.map(edge => edge.node)]
}
