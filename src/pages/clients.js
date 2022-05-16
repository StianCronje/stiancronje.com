import React from 'react'
import {graphql, Link} from 'gatsby'

const ClientsPage = ({data}) => {
    const clients = data.allStrapiClient.nodes
  return (
      <ul>
          {clients.map(client => (
              <li>
                  <Link to={`/clients/${client.id}`}>{client.Name}</Link>
              </li>
          ))}
      </ul>
  )
}

export default ClientsPage

export const query = graphql`
query ClientsPageQuery {
  allStrapiClient {
    nodes {
      Name
      id
    }
  }
}
`