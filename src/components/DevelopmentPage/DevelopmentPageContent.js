import React from 'react'

import { usePortfolioProjects } from '../../hooks'

import DevelopmentCard from './DevelopmentCard'

export const DevelopmentPageContent = () => {
  const projects = usePortfolioProjects()

  return (
    <div className="flex flex-col">
      {projects.map(project => (
        <DevelopmentCard key={project.id} project={project} />
      ))}
    </div>
  )
}
