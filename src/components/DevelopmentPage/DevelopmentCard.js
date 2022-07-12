import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

const DevelopmentCard = ({ project }) => (
  <Fade bottom>
    <div className="p-6">
      <div className="flex flex-col rounded-sm p-4 shadow-lg md:flex-row">
        <div className="flex md:w-1/3">
          <GatsbyImage
            image={getImage(project.featuredImage.node.localFile)}
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            loading="lazy"
            alt={project.featuredImage.node.altText}
          />
        </div>
        <div className="mt-2 flex flex-col justify-between pb-0 md:w-2/3 md:px-12">
          <span className="my-2 text-xl md:text-2xl">{project.title}</span>
          <p dangerouslySetInnerHTML={{ __html: project.descripion }} />
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <a
              href={project.deployment}
              target="_blank"
              rel="noreferrer"
              className="m-4 w-full rounded-sm bg-gradient-to-b from-purple-400 to-purple-700 py-2 text-center text-2xl text-white hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-400 md:text-xl"
            >
              View Deployed Project
            </a>
            <a
              href={project.gitHub}
              target="_blank"
              rel="noreferrer"
              className="m-4 w-full rounded-sm bg-gradient-to-b from-purple-400 to-purple-700 py-2 text-center text-2xl text-white hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-400 md:text-xl"
            >
              {project.gitHub ? 'View Code on GitHub' : 'Code Unavailable'}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default DevelopmentCard
