import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import {
  processWordPressPost,
  chooseCategoryColor,
  chooseTagColor,
  getHeadingsFromMarkdown,
} from '../utils/functions'

import {
  Layout,
  Seo,
  ShareButtons,
  TableOfContents,
  Tag,
  ScrollToTop,
} from '../components/components'

const WordPressPost = ({ data: { wpPost } }) => {
  const { siteUrl } = useSiteMetadata()
  const {
    title,
    author,
    date,
    excerpt,
    content,
    featuredImg,
    category,
    tags,
    seo,
    ogImg,
    twitterImg,
    uri,
  } = processWordPressPost(wpPost)

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={`${siteUrl}${uri}`}
        ogType="article"
        ogImg={ogImg.src}
        ogImgAltText={featuredImg.altText}
        twitterImg={twitterImg.src}
      />
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap lg:items-center">
            <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2 2xl:w-5/12">
              <div className="mx-auto max-w-max overflow-hidden rounded-lg md:ml-0">
                <GatsbyImage
                  id="featured-image"
                  image={featuredImg.src}
                  alt={featuredImg.altText}
                  loading="eager"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className={`mb-6 inline-block rounded-full ${chooseCategoryColor(
                  category
                )} px-2 font-garamond font-medium shadow-md`}
              >
                {category}
              </div>
              <div className="flex items-center">
                <p className="inline-block font-medium text-purple-600">
                  Andrew Kepson
                </p>
                <span className="mx-1 text-violet-500">•</span>
                <p className="inline-block font-medium text-purple-600">
                  {date}
                </p>
              </div>
              <h1 className="mb-4 font-garamond text-3xl font-normal leading-tight tracking-tighter text-gray-900 md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <div class="-mx-2 flex items-center">
                <div class="w-auto px-2">
                  <StaticImage
                    src="../images/me-photos/802A3320.jpg"
                    alt={`The author of this blog post, ${author}, standing in front of the Rocky Mountains in Colorado.`}
                    height={95}
                    width={95}
                    quality={90}
                    imgClassName="rounded-full"
                  />
                </div>
                <div class="w-auto px-2 font-garamond">
                  <h4 class="text-coolGray-800 text-base font-bold md:text-lg">
                    {author}
                  </h4>
                  <p class="text-coolGray-500 text-base md:text-lg">{date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <aside className="w-full px-4 lg:mb-8 lg:w-4/12 xl:w-3/12">
              <ShareButtons
                url={`${siteUrl}${uri}`}
                title={title}
                excerpt={excerpt}
                hashtags={tags}
              />
              <span className="text-coolGray-600 border-coolGray-200 border-b text-center font-roboto text-xl font-semibold">
                Table of Contents
              </span>
              <TableOfContents headings={getHeadingsFromMarkdown(content)} />
              <div className="w-full px-2">
                <span className="text-coolGray-800 text-base font-bold md:text-lg">
                  Tags:
                </span>
                <div className="min-h-full w-full">
                  <ul className="flex flex-row flex-wrap gap-1">
                    {tags.map(tag => (
                      <li key={tag}>
                        <Tag tag={tag} color={chooseTagColor(tag)} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div class="w-full md:flex-1 lg:mt-6">
              <article className="prose mx-auto mb-16 max-w-full font-garamond text-xl leading-relaxed text-gray-900 prose-headings:font-garamond prose-headings:font-semibold prose-h1:text-center prose-h1:text-5xl prose-h1:text-gray-800 prose-h2:text-2xl prose-h2:text-gray-700 prose-h3:text-xl prose-h3:text-gray-600 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-500 prose-blockquote:border-purple-400 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:shadow-lg prose-img:shadow-xl md:w-2/3 md:text-2xl md:prose-h2:text-3xl md:prose-h3:text-2xl lg:prose-h2:text-4xl lg:prose-h3:text-3xl">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className="text-right">{date}</div>
              </article>
              <p className="text-md text-center font-garamond text-gray-700 lg:text-lg">
                This post is powered by headless WordPress.
              </p>
            </div>
            <ScrollToTop />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WordPressPost

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              featuredImg: gatsbyImageData(placeholder: BLURRED, quality: 90)
              ogImg: resize(
                cropFocus: ATTENTION
                height: 630
                width: 1200
                quality: 90
              ) {
                src
              }
              twitterImg: resize(
                cropFocus: ATTENTION
                height: 120
                width: 120
                quality: 90
              ) {
                src
              }
            }
          }
        }
      }
      author {
        node {
          name
        }
      }
      seo {
        canonical
        title
        metaDesc
      }
      uri
      title
      excerpt
      date(formatString: "MMMM Do, YYYY")
      tags {
        nodes {
          name
        }
      }
      content
      categories {
        nodes {
          name
        }
      }
    }
  }
`
