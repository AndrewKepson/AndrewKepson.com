import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'
import { usePortraitPhoto } from '../../hooks/usePortraitPhoto'

import { LatestBlogPosts } from './LatestBlogPosts'

export const HomePageContent = () => (
  <div className="-mb-4 flex flex-wrap items-center text-gray-500 md:mb-0 lg:px-12 lg:pt-12">
    <div className="mb-4 w-full px-2 text-xl md:mb-0 md:px-12 lg:w-1/2 lg:px-20 lg:text-lg">
      <Fade bottom>
        <h1 className="mb-6 font-roboto text-3xl font-semibold leading-tight text-gray-800 md:text-6xl">
          I'm Andrew
        </h1>
      </Fade>
      <Fade bottom>
        <p className="mb-4 font-work-sans leading-relaxed text-gray-600">
          Headless WordPress. SEO. Content. JavaScript. Focused on site speed
          and bridging the gap between web development and marketing.
        </p>
      </Fade>
    </div>
    <div className="mb-4 w-full px-4 md:mb-0 lg:w-1/2">
      <Fade left>
        <GatsbyImage
          image={usePortraitPhoto()}
          loading="eager"
          alt="Andrew Kepson in 2020"
          className="rounded shadow-2xl"
        />
      </Fade>
    </div>
    <LatestBlogPosts />
  </div>
)
