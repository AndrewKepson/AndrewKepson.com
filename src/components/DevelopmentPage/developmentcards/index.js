import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { CodePortfolio } from '../../../data/codeProjectsPortfolio'
import DevelopmentCard from './DevelopmentCard'

const DevelopmentCards = () => {
  const data = useStaticQuery(graphql`
    query projectPhotos {
      allFile(
        filter: {
          sourceInstanceName: { eq: "src" }
          relativePath: { regex: "/images/development-project-images/" }
        }
      ) {
        edges {
          node {
            id
            absolutePath
            relativePath
            name
            childImageSharp {
              gatsbyImageData(quality: 70, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col">
      {CodePortfolio.map((project, i) => {
        const source = data.allFile.edges.find(
          edge => edge.node.name === project.photo
        )
        return <DevelopmentCard key={i} imgSrc={source} project={project} />
      })}
    </div>
  )
}

export default DevelopmentCards
