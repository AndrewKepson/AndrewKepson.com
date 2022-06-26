import { useStaticQuery, graphql } from 'gatsby'

export const useWPTags = () => {
  const { allWpTag } = useStaticQuery(graphql`
    query WordPressTagsQuery {
      allWpTag {
        edges {
          node {
            name
            id
            uri
            posts {
              nodes {
                title
                id
                uri
                date
                excerpt
                categories {
                  nodes {
                    name
                    id
                  }
                }
                tags {
                  nodes {
                    name
                  }
                }
                featuredImage {
                  node {
                    id
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return [...allWpTag.edges.map(edge => edge.node)]
}
