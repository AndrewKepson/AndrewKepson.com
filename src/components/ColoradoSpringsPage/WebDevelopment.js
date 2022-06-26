import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

export const WebDevelopment = () => (
  <section className="snap-start snap-always overflow-hidden bg-white py-10">
    <Fade up>
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-20 md:max-w-4xl">
          <h2 className="mb-4 font-roboto text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-4xl">
            Professional Web Development in Colorado Springs
          </h2>
          <p className="lead text-muted font-work-sans font-medium text-gray-800 md:text-xl">
            Build your audience with a fast and performant website using with
            the latest technologies such as Jamstack and{' '}
            <Link
              to="/headless-wordpress-developer/"
              className="text-purple-600 hover:text-purple-500"
            >
              headless WordPress development
            </Link>
            . Whether you need a landing page to share information about your
            business in Colorado Springs, a way for potential customers to
            contact you, or you're building an ecommerce empire, you need
            professional web development services. Customers today expect to be
            able to find local services quickly and easily from the palm of
            their hand. Will your website be the one that they find?
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap lg:items-center">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
            {developmentList.map(({ title, details, icon }) => (
              <ListItem
                key={title}
                title={title}
                details={details}
                icon={icon}
              />
            ))}
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="relative mx-auto max-w-max shadow-lg md:mr-0">
              <StaticImage
                src="../../images/stock/colorado-springs-web-developer.jpg"
                alt="Colorado Springs web developer working example."
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </section>
)

const developIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
)

const measureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    />
  </svg>
)

const enhanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
)

const ListItem = ({ icon, title, details }) => (
  <div className="flex flex-wrap rounded-md p-8 text-center transition duration-200 md:text-left">
    <div className="mb-6 w-full md:mb-0 md:w-auto md:pr-6">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-lg bg-purple-500 text-white">
        {icon()}
      </div>
    </div>
    <div className="w-full md:flex-1 md:pt-3">
      <h3 className="ront-roboto mb-4 text-xl font-bold leading-tight text-gray-700 md:text-2xl">
        {title}
      </h3>
      <p className="font-work-sans font-medium text-gray-600">{details}</p>
    </div>
  </div>
)

const developmentList = [
  {
    title: 'Develop',
    details:
      'Your website will be customized to suit your brand, and the functionalities you need to engage with your audience.',
    icon: developIcon,
  },
  {
    title: 'Measure',
    details:
      "Detailed web analytics reporting provides insight into exactly how users are engaging, where they are coming from, and how to optimize your website's experience to maximize leads and conversions.",
    icon: measureIcon,
  },
  {
    title: 'Enhance',
    details:
      'Continue expanding your digital footprint with ongoing maintenance, content, and digital marketing to captivate your audience.',
    icon: enhanceIcon,
  },
]
