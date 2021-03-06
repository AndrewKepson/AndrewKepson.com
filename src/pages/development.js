import React from 'react'

import { Layout, Seo } from '../components/components'
import { DevelopmentPageContent } from '../components/components'

const Development = () => (
  <Layout>
    <Seo
      title="Development"
      description="Thank you for viewing my development portfolio. My primary web development technologies include React, headless WordPress, Node, and Tailwind CSS."
    />
    <DevelopmentPageContent />
  </Layout>
)

export default Development
