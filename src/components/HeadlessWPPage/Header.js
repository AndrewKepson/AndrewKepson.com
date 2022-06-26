import React from 'react'
import { Link } from 'gatsby'

export const Header = () => (
  <section className="py-5">
    <div className="container mx-auto px-4">
      <h1 className="mb-6 font-roboto text-3xl font-semibold leading-tight text-gray-800 md:text-6xl lg:text-5xl">
        Headless WordPress Developer Andrew Kepson
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="mb-6 inline-block max-w-xl md:mb-0">
          <p className="font-work-sans text-xl text-gray-800">
            Blast past your competitors with a headless WordPress website.
          </p>
        </div>
        <Link
          className="ml-auto inline-block w-full rounded bg-purple-600 px-12 py-4 text-center text-sm font-medium leading-normal text-white hover:bg-purple-500 md:w-auto"
          to="/contact/"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </section>
)
