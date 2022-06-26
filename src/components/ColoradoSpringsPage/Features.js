import React from 'react'

export const Features = () => (
  <section className="snap-start snap-always py-10 2xl:py-16">
    <div className="container mx-auto px-4">
      <div>
        <h2 className="font-roboto text-xl font-semibold text-gray-800 md:text-3xl lg:text-4xl">
          The Web Development Process
        </h2>
        <div className="-mx-6 flex flex-wrap lg:-mx-8">
          {features.map(({ title, details, icon }) => (
            <Feature title={title} details={details} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Feature = ({ title, details, icon }) => (
  <div className="mt-8 w-full px-6 md:w-1/2 lg:w-1/4 lg:px-8">
    <span className="mb-10 flex h-20 w-20 items-center justify-center rounded-lg bg-purple-500 text-white">
      {icon()}
    </span>
    <div className="mb-12 bg-gray-50 pb-px"></div>
    <h3 className="mt-12 mb-8 font-roboto text-lg font-bold">{title}</h3>
    <p className="font-work-sans text-lg">{details}</p>
  </div>
)

const MaintenanceIcon = () => (
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
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const DesignIcon = () => (
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
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
)

const DevelopmentIcon = () => (
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
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const AnalyticsIcon = () => (
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
      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const features = [
  {
    title: 'Design',
    details:
      'Enjoy a customized website branded for your business that looks great on any screen. Animations and 3D graphics available.',
    icon: DesignIcon,
  },
  {
    title: 'Development',
    details:
      "Even the most beautiful website is nothing if it doesn't perform. I develop websites that are fast & powerful, accessible anywhere in the world.",
    icon: DevelopmentIcon,
  },
  {
    title: 'Analytics Reporting',
    details:
      "Understand your website's traffic and performance with industry-standard web analytics reporting delivered right to your inbox.",
    icon: AnalyticsIcon,
  },
  {
    title: 'Maintenance Packages',
    details:
      "Ensure your website doesn't miss a beat with managed hosting, maintenance, and development packages custom-tailored to your needs.",
    icon: MaintenanceIcon,
  },
]
