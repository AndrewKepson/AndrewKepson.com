import React from 'react'
import { Link } from 'gatsby'

export const Brand = () => (
  <Link to="/">
    <div className="flex flex-wrap items-center justify-between py-6">
      <div className="space-x-1 px-4 py-1">
        <p className="mr-auto text-3xl font-medium uppercase text-purple-600">
          AK&nbsp;
        </p>
      </div>
    </div>
  </Link>
)
