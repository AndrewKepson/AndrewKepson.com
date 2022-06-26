import React from 'react'

import { Hero } from './Hero'
import { WebDesign } from './WebDesign'
import { WebDevelopment } from './WebDevelopment'
import { Features } from './Features'
import { CTA } from './CTA'
import { HowItWorks } from './HowItWorks'

export const ColoradoSpringsPageContent = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <WebDesign />
      <WebDevelopment />
      <HowItWorks />
      <Features />
      <CTA />
    </div>
  )
}
