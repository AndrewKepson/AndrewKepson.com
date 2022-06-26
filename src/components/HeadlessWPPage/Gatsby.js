import React from 'react'

const Gatsby = () => (
  <section className="w-full bg-purple-800 bg-opacity-75">
    <div className="px-4">
      <div className="-mx-4 flex flex-wrap  items-center text-center md:text-left">
        <div className="w-full px-10 py-16 md:order-2 md:w-8/12 md:py-0 xl:w-9/12">
          <h2 className="text-lg font-medium uppercase text-white">
            Headless WordPress Developer
          </h2>
          <h3 className="mb-4 text-4xl font-bold text-white">
            Blazing Fast Sites with Gatsby.js
          </h3>{' '}
          <a
            href="#"
            className="inline-block border-b border-current py-1 text-lg font-light text-white hover:border-current hover:text-gray-900"
          >
            See Collection
          </a>
        </div>
        <div className="w-full md:order-1 md:w-4/12 xl:w-3/12">
          <img
            src="FLPj768VgAMrnKD.jpg"
            className="mx-auto xl:w-full"
            alt="..."
            width="720"
            height="1080"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Gatsby
