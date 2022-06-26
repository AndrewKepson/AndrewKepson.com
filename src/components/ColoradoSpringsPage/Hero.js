import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Hero = () => (
  <section className="relative snap-start snap-always overflow-hidden bg-white">
    <div className="py-18">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap xl:items-center">
          <div className="mb-16 w-full px-4 md:mb-0 lg:w-1/2">
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
              Colorado Springs Web Developer Who Gets Results for Your Business
            </h1>
            <p className="mb-8 text-lg font-medium text-gray-700 md:text-xl">
              Are you looking for website development in Colorado Springs and
              beyond?
            </p>
            <div className="flex flex-wrap">
              <div className="w-full py-1 md:mr-4 md:w-auto md:py-0">
                <Link
                  to="/contact"
                  className="inline-block w-full rounded-md border border-purple-500 bg-purple-600 py-5 px-7 text-center text-base font-medium leading-4 text-white shadow-lg hover:bg-purple-500 hover:shadow-sm focus:ring-2 md:text-lg"
                >
                  Contact Me
                </Link>
              </div>
              <div className="w-full py-1 md:w-auto md:py-0">
                <Link
                  to="/about"
                  className="hover:bg-coolGray-100 inline-block w-full rounded-md border border-purple-600 bg-white py-5 px-7 text-center text-base font-medium leading-4 text-purple-600 shadow-lg hover:border-purple-500  hover:text-purple-500 hover:shadow-sm md:text-lg"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="rounded-7xl relative mx-auto hidden max-w-max md:mr-0 lg:block">
              <StaticImage
                imgClassName="rounded-7xl relative"
                src="../../images/stock/web-designer-colorado-springs.jpg"
                alt="Colorado Springs web development services help you stand out against the backdrop of this beautiful city."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
