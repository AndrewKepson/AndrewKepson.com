import React from 'react'
import { Link } from 'gatsby'

export const PortfolioCard = ({ portfolio, description, href }) => {
  const chooseSvg = portfolio => {
    if (portfolio === 'Development') return <DevSVG />
    if (portfolio === 'Blog') return <WritingSVG />
    if (portfolio === 'Photography & Digital Art') return <ArtSVG />
  }

  return (
    <div className="w-full p-4 lg:w-1/3">
      <div className="flex h-full flex-col place-content-around justify-between rounded-lg px-6 py-16 shadow-lg">
        {chooseSvg(portfolio)}
        <h5 className="mb-2 text-xl font-bold text-gray-900">{portfolio}</h5>
        <p className="mb-4 text-lg">{description}</p>
        <Link to={href} className="text-purple-600 hover:text-purple-500">
          Learn More
        </Link>
      </div>
    </div>
  )
}

const DevSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="mb-4 inline-block h-10 w-10 text-gray-900"
    fill="currentColor"
  >
    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
  </svg>
)

const WritingSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mb-4 inline-block h-10 w-10 text-gray-900"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z" />
    </g>
  </svg>
)

const ArtSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="mb-4 inline-block h-10 w-10 text-gray-900"
    fill="currentColor"
  >
    <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
  </svg>
)
