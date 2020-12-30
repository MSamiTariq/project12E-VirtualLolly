const path = require('path');
exports.createPages = async ({actions, graphql}) => {
  console.log(graphql);
    const result = await graphql(
      `query MyQuery{
            LOLLIES{
                getAllLollies{
                recipientName
                sender
                message
                flavourTop
                flavourMid
                flavourBottom
                lollyPath
                }
              
          }
      }
    `)
    console.log("from node.js", result)

    result.data.LOLLIES.getAllLollies.map(async (lolly) => {
        await actions.createPage({
            path: `lolly/${lolly.lollyPath}`,
            component: path.resolve(`./src/template/lollyTemplate.js`),
            context: {
                lolly
            }
        })
    })
}
