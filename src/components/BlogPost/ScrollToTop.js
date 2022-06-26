import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

export const ScrollToTop = () => (
  <button
    className="fixed right-5 bottom-5 z-50 float-right cursor-pointer bg-gray-300 p-2 text-center shadow-sm hover:shadow-none"
    onClick={() => scrollTo('#featured-image')}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
)
