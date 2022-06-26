import React from 'react'
import Fade from 'react-reveal/Fade'

import QuotationSymbol from './QuotationSymbol'

export default function Testimonial({ quote, source }) {
  return (
    <div className="py-2 md:py-4">
      <div className="mx-auto p-4 w-full lg:w-8/12">
        <div className="relative">
          <Fade top>
            <QuotationSymbol />
          </Fade>
          <h4 className="font-medium leading-tight mb-4 text-4xl text-gray-800">
            {quote}
          </h4>
          <div>
            <p className="inline-block font-roboto text-lg text-gray-700">
              {source}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
