import React from 'react'
import Fade from 'react-reveal/Fade'

import DevelopmentCardContent from './DevelopmentCardContent'
import DevelopmentCardImage from './DevelopmentCardImage'

const DevelopmentCard = ({ classes, imgSrc, project }) => (
  <Fade bottom>
    <div className="mb-5 h-full px-4 py-6 shadow-lg lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <DevelopmentCardImage
          classes={classes}
          imgSrc={imgSrc}
          altText={project.altText}
        />
        <DevelopmentCardContent classes={classes} project={project} />
      </div>
    </div>
  </Fade>
)

export default DevelopmentCard
