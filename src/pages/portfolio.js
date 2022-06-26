import React from 'react'

import { Layout, Seo, PortfolioPageContent } from '../components/components'

const Portfolio = () => (
  <Layout>
    <Seo
      title="Portfolio - Andrew Kepson"
      description="Thank you for viewing my portfolio. As a digital marketer, web development and content writing are two skills that I use every day to create engaging digital experiences between brands and their customers."
    />
    <PortfolioPageContent />
  </Layout>
)

export default Portfolio
