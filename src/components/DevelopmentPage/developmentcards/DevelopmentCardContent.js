import React from 'react'

import DevelopmentCardFooter from './DevelopmentCardFooter'

const DevelopmentCardContent = ({ project }) => (
  <div className="mt-6 lg:col-span-2 lg:m-0 lg:pl-8">
    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
      <h3 className="pb-3 text-3xl">{project.project}</h3>
      <p className="text-lg font-medium text-gray-800 md:text-xl">
        {project.description}
      </p>
      <DevelopmentCardFooter project={project} />
    </div>
  </div>
)

export default DevelopmentCardContent
