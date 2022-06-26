import React from 'react'

export const HowItWorks = () => (
  <section className="snap-start snap-always bg-white py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-5xl text-center md:mb-24">
        <span className="mb-4 inline-block rounded-full bg-violet-100 py-px px-2 text-xs font-medium uppercase leading-5 text-purple-500 shadow-sm">
          How it works
        </span>
        <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
          Website Design &amp; Development in Colorado Springs
        </h2>
        <p className="text-coolGray-500 text-lg font-medium md:text-xl">
          I will guide you through the process of making your website a reality,
          from idea to finished product. Learn more about how it works below.
        </p>
      </div>
      <div className="-mx-4 flex flex-wrap">
        {items.map(({ number, title, details }) => (
          <Card key={number} number={number} title={title} details={details} />
        ))}
      </div>
    </div>
  </section>
)

const items = [
  {
    number: 1,
    title: 'Planning',
    details:
      "During planning we'll decide on hosting, branding, configuring your domain name, and the features you need to succeed online.",
  },
  {
    number: 2,
    title: 'Design',
    details:
      'The design is based on your brand and the journey your customer will take on your website. Your website is your digital storefront, and should look and feel like your brand.',
  },
  {
    number: 3,
    title: 'Development',
    details:
      "At this stage your website begins to come to life! The rough draft will be built out along with the site's core functionalities.",
  },
  {
    number: 4,
    title: 'Revisions',
    details:
      'You will have the chance to review the website and decide on the revisions that your website needs to be ready for production.',
  },
  {
    number: 5,
    title: 'Site Launch',
    details:
      'Finally! Your website will be on the world wide web, available to anyone with an internet connection.',
  },
  {
    number: 6,
    title: 'Maintenance & Optimization',
    details:
      'Based on your business and marketing needs, the site can be continually expanded and optimized. Make the most of the traffic you have and uncover ways to bring in more.',
  },
]

const Card = ({ number, title, details }) => (
  <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="relative h-full rounded-md bg-gray-50 px-8 pt-14 pb-8 shadow-lg">
      <div className="absolute top-0 left-1/2 inline-flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 transform items-center justify-center rounded-full bg-white">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-xl font-semibold text-white">
          {number}
        </div>
      </div>
      <span className="mb-4 font-roboto text-lg font-bold text-gray-800 md:w-64 md:text-xl">
        {title}
      </span>
      <p className="font-work-sans font-medium text-gray-600">{details}</p>
    </div>
  </div>
)
