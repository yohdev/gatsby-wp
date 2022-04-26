const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage, cptURI } = options

  const { data } = await graphql(/* GraphQL */ `
    {
      allWpPartner(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
          date
        }
      }
    }
  `)

  const chunkedContentNodes = chunk(data.allWpPartner.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]

      const path = index === 0 ? cptURI : `${cptURI}/page/${index + 1}/`

        await actions.createPage({
        component: resolve(`./src/templates/archive-partners.js`),
        path: path,
        context: {
          firstId: firstNode.id,
          archivePath: cptURI,
          uri: path,
          archiveType: "partners",
          offset: perPage * index,
          pageNumber: index + 1,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )
}
