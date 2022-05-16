import { graphql } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import React from 'react'

const Client = ({data}) => {
    const {strapiClient: client} = data
    const headerCenter = getImage(client.header_center.localFile)
  return (
      <>
        <GatsbyImage image={headerCenter} />
        <h1>{client.Name}</h1>
        <div dangerouslySetInnerHTML={{__html: client.Content}} />
      </>
  )
}

export default Client

export const query = graphql`
query ClientPageQuery($id: String!) {
    strapiClient(id: {eq: $id}) {
        id
        Name
        Content
        header_center {
            localFile {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        # header_left {
        #     localFile {
        #         childImageSharp {
        #             gatsbyImageData
        #         }
        #     }
        # }
    }
}
`