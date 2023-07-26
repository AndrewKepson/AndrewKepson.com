import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioProjects = () => {
  const { allWpPortfolioProject } = useStaticQuery(graphql`
  {
    allWpPortfolioProject(sort: {date: DESC}) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
          }
          descripion
          technologies
          gitHub
          deployment
        }
      }
    }
  }
  `)

  return allWpPortfolioProject.edges.map(edge => edge.node)
}
