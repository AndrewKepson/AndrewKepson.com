import React from 'react'
import PropTypes from 'prop-types'

import { useSiteMetadata, usePortraitPhoto } from '../../hooks'

export const WebPageSchema = ({
  name = 'Andrew Kepson',
  description = '',
  url = '',
  keywords = '',
  ...additionalFields
}) => {
  const { author, siteUrl, title } = useSiteMetadata()
  const portraitPhoto = usePortraitPhoto()

  console.log(portraitPhoto)

  const schema = {
    '@type': 'WebPage',
    name: '',
    description: '',
    url: '',
    isPartOf: {
      '@type': 'WebSite',
      url: siteUrl,
      name: title,
      about: {
        '@type': 'Person',
        name: author,
        image: {
          '@type': 'ImageObject',
          contentUrl: `${siteUrl}/${portraitPhoto.publicURL}`,
          description: '',
          name: '',
        },
        sameAs: [],
      },
    },
    keywords: '',
    about: [
      {
        '@type': 'Thing',
        name: '',
        sameAs: '',
      },
    ],
  }

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

WebPageSchema.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keywords: PropTypes.string,
}
