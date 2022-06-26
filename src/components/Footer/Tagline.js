import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

export const Tagline = () => {
  const { author } = useSiteMetadata()

  return (
    <div className="py-4 text-sm">
      <hr className="mx-8 mb-4 border-gray-700" />
      <div className="-mx-4 flex flex-col flex-wrap items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} by {author}
        </p>
        <Link className="hover:text-purple-500" to="/sitemap/sitemap-0.xml">
          XML Sitemap
        </Link>
        <Link className="hover:text-purple-500" to="/html-sitemap">
          HTML Sitemap
        </Link>
      </div>
    </div>
  )
}
