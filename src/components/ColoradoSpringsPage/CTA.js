import React from 'react'
import { Link } from 'gatsby'

export const CTA = () => (
  <section className="snap-start snap-always bg-white py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 font-roboto text-3xl font-bold text-gray-800 md:text-4xl">
          Colorado Springs Web Developer Who Can Bring Your Site To Life
        </h2>
        <p className="text-coolGray-500 mb-6 font-work-sans text-lg font-medium md:text-xl">
          You need a website to stand out in Colorado Springs. Let's get
          started.
        </p>
        <Link
          to="/contact/"
          className="inline-block w-full rounded-md border border-transparent bg-purple-600 py-3 px-7 text-center font-roboto text-lg font-medium leading-7 text-white shadow-lg hover:bg-purple-500 hover:shadow-sm md:w-auto"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </section>
)
