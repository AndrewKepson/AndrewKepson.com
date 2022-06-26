import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

export const BlogPost = ({ post, category }) => (
  <Fade bottom>
    <div className="mb-6 w-full">
      <div className="flex h-full flex-wrap overflow-hidden rounded-md bg-white shadow-lg">
        <div className="w-full md:w-5/12 lg:w-full xl:w-5/12">
          <div className="relative h-full">
            {' '}
            <Link
              to={post.uri}
              className="block h-full opacity-75 hover:opacity-100"
            >
              {post.featuredImage ? (
                <GatsbyImage
                  image={getImage(post.featuredImage.node.localFile)}
                  alt={post.featuredImage?.node.altText}
                  className="h-full w-full object-cover"
                />
              ) : (
                <StaticImage
                  src="../../images/stock/writing-notepad.jpg"
                  className="h-full w-full object-cover"
                  alt="Writing before blogs."
                  quality={90}
                />
              )}
            </Link>
          </div>
        </div>
        <div className="w-full px-8 py-6 md:w-7/12 lg:w-full xl:w-7/12">
          <div className="mb-3">
            {' '}
            <span
              className={` inline-block rounded-sm bg-opacity-75 py-1 text-xs font-medium uppercase`}
            >
              {category}
            </span>
          </div>
          <h3 className="font-heading mb-3 font-semibold leading-tight hover:text-purple-400">
            <Link to={post.uri}>{post.title}</Link>
          </h3>
          <p
            className="font-body mb-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <Link
            to={post.uri}
            className="text-sm font-bold text-purple-600 hover:text-purple-400"
          >
            Read more
          </Link>
          <div className="mt-auto flex w-full items-center justify-end border-t py-3 text-xs text-gray-600">
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default BlogPost
