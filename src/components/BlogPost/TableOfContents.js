import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

export const TableOfContents = ({ headings }) => (
  <ol className="border-coolGray-100 text-coolGray-300 hover:text-coolGray-500 border-b lg:mb-8 lg:pb-6">
    {headings.map(heading => (
      <li key={heading.key} className={heading.classes}>
        <span onClick={() => scrollTo(`#${heading.slug}`)}>
          {heading.heading}
        </span>
      </li>
    ))}
  </ol>
)
