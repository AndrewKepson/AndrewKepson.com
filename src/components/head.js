import React from 'react'
import { Script } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { WebPageSchema } from './Schema/WebPage'

export const Seo = ({
  title,
  description,
  meta = [],
  canonical,
  schema,
  ogType = 'website',
  ogImg = '',
  ogImgAltText = '',
  twitterImg = '',
}) => {
  const { siteUrl, description: siteDescription, author } = useSiteMetadata()

  const metaDescription = description || siteDescription

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: 'og:image',
          content: `${siteUrl}${ogImg}`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:creator`,
          content: author || ``,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'twitter:image',
          content: `${siteUrl}${twitterImg}`,
        },
        {
          property: 'twitter:image:alt',
          content: ogImgAltText,
        },
      ].concat(meta)}
    >
      {typeof window !== 'undefined' &&
        process.env.NODE_ENV === 'production' && (
          <Script type="text/javascript">
            {(function (c, l, a, r, i, t, y) {
              c[a] =
                c[a] ||
                function () {
                  ;(c[a].q = c[a].q || []).push(arguments)
                }
              t = l.createElement(r)
              t.async = 1
              t.src = 'https://www.clarity.ms/tag/' + i
              y = l.getElementsByTagName(r)[0]
              y.parentNode.insertBefore(t, y)
            })(window, document, 'clarity', 'script', 'h1bbyuxxuy')}
          </Script>
        )}
      <title>{title}</title>
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <Script type="application/ld+json">{JSON.stringify(schema)}</Script>
      )}
      <WebPageSchema
        name={title}
        description={metaDescription}
        url={canonical}
      />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  schema: PropTypes.object,
  ogImage: PropTypes.string,
}
