import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const DevelopmentCardImage = ({ imgSrc, altText }) => (
  <div className="col-span-1 self-center px-4">
    <GatsbyImage
      image={imgSrc.node.childImageSharp.gatsbyImageData}
      className="rounded-tl-lg rounded-br-lg shadow-lg lg:shadow-md"
      loading="lazy"
      alt={altText}
    />
  </div>
)

export default DevelopmentCardImage
