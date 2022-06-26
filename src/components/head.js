import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const Seo = ({
  title,
  description,
  meta = [],
  canonical,
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
      <title>{title}</title>
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
}
