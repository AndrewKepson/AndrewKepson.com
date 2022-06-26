import React from 'react'
import Fade from 'react-reveal/Fade'

import { PortfolioCards } from './PortfolioCards/PortfolioCards'

export const PortfolioPageContent = () => (
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap  items-center">
      <div className="w-full px-6 lg:w-7/12">
        <h2 className="mb-1 self-center pb-12 font-roboto text-3xl font-bold text-gray-700">
          Thank You For Your Interest in My Work
        </h2>
      </div>
    </div>
    <Fade bottom>
      <PortfolioCards />
    </Fade>
  </div>
)
