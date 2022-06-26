import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const WebDesign = () => (
  <section className="py-18 my-10 snap-start snap-always px-4">
    <div className="container grid grid-cols-1 justify-center gap-4 md:grid-cols-2">
      <div>
        <StaticImage
          className="shadow-lg"
          src="../../images/stock/colorado-springs-web-design.jpg"
          alt="I'm a web designer in Colorado Springs."
        />
      </div>
      <div className="mx-auto max-w-2xl text-gray-600">
        <h2 className="mb-8 font-roboto text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl">
          Colorado Springs Web Design
        </h2>
        <p className="lead text-muted mb-8 font-work-sans md:text-xl">
          Stand out like sandstone against the backdrop of the Rocky Mountains
          with a beautiful website. Modern websites need to be accessible and
          fast on every kind of device to attract as many customers as possible.
          It all starts with the design.
        </p>
        <p className="lead text-muted mb-8 font-work-sans md:text-xl">
          Find website design in Colorado Springs to solve real problems for
          your business by making it easy for potential customers to find you,
          learn about you, and get in touch.
        </p>
      </div>
    </div>
  </section>
)
