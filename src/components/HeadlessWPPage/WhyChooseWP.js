import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { CheckIcon } from '@heroicons/react/outline'

const headlessWPFeatures = [
  {
    name: 'Manage Content',
    description:
      'Manage all the content for your site including landing pages, blogs, photos, file downloads, and more!',
  },
  {
    name: 'Online Collaboration',
    description:
      'Teams have been collaborating with WordPress since 2005, and the platform only continues to improve!',
  },
  {
    name: 'Sell Products & Services',
    description:
      'WordPress is not just for blogging! Book appointments or manage a global ecommerce operation with WooCommerce using WordPress as a headless CMS.',
  },
  {
    name: 'Enhanced Marketing',
    description:
      "WordPress is a world-class platform for digital marketing because it puts your creative team back in the driver's seat with the data they need to create & deploy comprehensive strategies.",
  },
  {
    name: 'Open Source',
    description:
      'WordPress is open source software that is actively maintained and improved by a global team of developers.',
  },
  {
    name: 'Clear & Detailed Reporting',
    description:
      'I configure websites with industry standard web analytics & reporting tools to provide you with the user interaction data you need to maximize your digital channels and drive increasing results through your website.',
  },
]

export const WhyChooseWP = () => (
  <div className="bg-white">
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
      <div className="flex flex-col justify-between">
        <h2 className="font-roboto text-base font-semibold uppercase tracking-wide text-gray-900">
          Why Choose WordPress as Your Headless CMS?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Choosing the right platform makes all the difference in connecting the
          dots for your team to win online.
        </p>
        <StaticImage
          src="../../images/stock/headless-wordpress-blogging-stock.jpg"
          alt="Headless WordPress developers build sites you can edit from anywhere."
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="mt-12 lg:col-span-2 lg:mt-0">
        <dl className="space-y-10 sm:grid sm:grid-flow-row sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
          {headlessWPFeatures.map(feature => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
)
