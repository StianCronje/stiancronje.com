const path = require('path')

exports.createPages = async ({graphql, actions}) => {
const {createPage} = actions

const result = await graphql(`
{
    allStrapiClient {
      nodes {
        id
      }
    }
  }
`)

const template = path.resolve('src/templates/client.js')
result.data.allStrapiClient.nodes.forEach(client => {
    const path = `/clients/${client.id}`
    console.log('create  page:', path)
    createPage({
        path: path,
        component: template,
        context: {
            id: client.id
        }
    })
});
}