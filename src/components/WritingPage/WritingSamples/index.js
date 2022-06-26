import React from 'react'

const WritingSamples = () => {
  // const data = useStaticQuery(graphql`
  //   query GetSampleData {
  //     allFile(filter: { relativeDirectory: { eq: "samples" } }) {
  //       edges {
  //         node {
  //           childMarkdownRemark {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //             }
  //             id
  //             excerpt
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { edges } = data.allFile

  return (
    <div>
      <div>
        {/* {edges.map(sample => {
          const {
            node: {
              childMarkdownRemark: {
                id,
                frontmatter: { title, date },
                fields: { slug },
                excerpt,
              },
            },
          } = sample
          return (
            <WritingSample
              key={id}
              slug={slug}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          )
        })} */}
      </div>
    </div>
  )
}

export default WritingSamples
