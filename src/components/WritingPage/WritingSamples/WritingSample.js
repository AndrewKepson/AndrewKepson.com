import React from 'react'
import { Link } from 'gatsby'

const WritingSample = ({ slug, title, date, excerpt }) => (
  <div className="flex-1">
    <Link to={`/writing/${slug}`}>
      <img
        src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
        className="w-full"
        alt="Alt text"
      />
    </Link>
    <div className="p-4">
      <h5 className="text-sm text-gray-500">{title}</h5>

      <h6 className="text-sm text-gray-500">{date}</h6>
      <p className="mt-3 text-base text-gray-500">{excerpt}</p>
      <Link
        to={`/writing/${slug}`}
        className="text-base font-semibold text-purple-600 hover:text-purple-500"
      >
        <p>Read Full Piece</p>
      </Link>
    </div>
  </div>
)

export default WritingSample
