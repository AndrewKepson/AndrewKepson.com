import React from 'react'

const DevelopmentCardFooter = ({ project }) => (
  <footer className="mt-6 flex flex-row flex-wrap items-center justify-around">
    <div className="m-2 flex w-full flex-none cursor-pointer justify-center bg-gray-600 p-6 text-base font-medium text-gray-100 transition-colors duration-150 hover:bg-gray-500 lg:mx-2 lg:flex-1">
      <a href={project.deployment} target="_blank" rel="noreferrer">
        View Deployed Project
      </a>
    </div>
    <div className="m-2 flex w-full flex-none cursor-pointer justify-center bg-gray-500 p-6 text-base font-medium text-gray-100 transition-colors duration-150 hover:bg-gray-600 md:mx-2 lg:flex-1">
      <a href={project.github} target="_blank" rel="noreferrer">
        View Code on GitHub
      </a>
    </div>
  </footer>
)

export default DevelopmentCardFooter
