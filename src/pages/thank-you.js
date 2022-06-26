import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout, Seo } from '../components/components'

const ThankYouPage = () => (
  <Layout>
    <Seo
      title="Thank You for Contacting Me | Andrew Kepson"
      description="Thank you for contacting me."
    />
    <div className="flex h-full flex-col lg:mx-16">
      <section class="flex w-full flex-col items-center justify-center bg-gray-800 p-4">
        <h1 class="text-5xl text-gray-100">Thank You</h1>
        <p class="mt-10 p-10 text-gray-100 md:p-0">
          Thank you for contacting me.&nbsp;
        </p>
        <p className="hover:text-purple-400">
          <Link to="/">Return Home</Link>
        </p>
      </section>
      <StaticImage
        src="../images/stock/reymark-franke-colorado-meadow.jpeg"
        alt="Vail, Colorado"
        placeholder="tracedSVG"
        layout="constrained"
        quality={90}
      />
    </div>
  </Layout>
)

export default ThankYouPage
