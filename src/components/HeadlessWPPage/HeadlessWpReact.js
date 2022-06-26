import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const HeadlessWpReact = () => (
  <div className="relative">
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <StaticImage
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src="../../images/stock/headless-wordpress-developer-marketing-collaboration.jpg"
          alt="Headless WordPress developers should build you a website you can use to drive growth."
        />
        <p>Photo by Marvin Meyer on Unsplash</p>
      </div>
    </div>
    <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className="lg:col-start-2 lg:pl-8">
        <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h2 className="mt-2 font-roboto text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Headless WordPress with React
          </h2>
          <p className="mt-8 text-lg text-gray-800">
            Ever since Facebook created React and released it to the world in
            2014, it has quickly become a popular choice for web developers and
            the companies they work for to build beautiful, fast, and responsive
            websites and user interfaces. React{' '}
            <strong>
              <em>reacts</em>
            </strong>{' '}
            to user input instantly, making for a seamless experience and
            incredibly fast websites that customers love to use. This makes it
            an easy choice for building the front end of your headless WordPress
            website.
          </p>
          <div className="prose prose-indigo mt-5 text-gray-800">
            <h3 className="font-roboto text-gray-900">
              Headless WordPress with Gatsby
            </h3>
            <p>
              Gatsby is a React framework. This means it is built on top of
              React, providing all of the functionality and quickness you expect
              from a React application, with additional features designed to
              enhance the development experience when building websites and to
              make them even faster and more efficient, especially with headless
              WordPress. As a headless WordPress developer, I love using{' '}
              <a
                href="https://www.gatsbyjs.com/"
                className="text-purple-600 no-underline hover:text-purple-400"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Gatsby
              </a>{' '}
              to build blazing fast websites - so much that I built my own
              website using Gatsby with headless WordPress!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
