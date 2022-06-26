import { useStaticQuery, graphql } from 'gatsby'

export const usePortraitPhoto = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData: portrait },
    },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "802A3320" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  return portrait
}
