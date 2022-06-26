import React from 'react'
import Fade from 'react-reveal/Fade'

import ThankYou from './ThankYou'
import RenderCards from './RenderCards'

const CardsContent = () => (
  <div className="container mx-auto">
    <ThankYou />
    <Fade bottom>
      <RenderCards />
    </Fade>
  </div>
)

export default CardsContent
