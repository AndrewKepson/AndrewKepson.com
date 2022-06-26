import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { useWordPressPosts } from '../../hooks/useWordPressPosts'

export const LatestBlogPosts = () => {
  const posts = [...useWordPressPosts().slice(0, 3)]

  return (
    <div className="relative w-full px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-roboto text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Latest Blog Posts
          </span>
          <p className="mx-auto mt-3 max-w-2xl font-work-sans text-xl text-gray-700 sm:mt-4">
            My blog is focused on{' '}
            <Link to="/headless-wordpress-developer">
              headless WordPress developer{' '}
            </Link>
            resources, digital marketing, and occasionally topics in blockchain.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <GatsbyImage
                  className="h-48 w-full object-cover"
                  image={getImage(post.featuredImage.node.localFile)}
                  alt={post.featuredImage.node.altText}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-gray-50 p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-600">
                    {post.categories.nodes[0].name}
                  </p>
                  <Link to={post.uri} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p
                      className="mt-3 text-base text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.slice(0, 150) + '...',
                      }}
                    />
                    <p className="text-sm font-medium text-purple-600 hover:text-purple-500 hover:underline">
                      Keep Reading
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
