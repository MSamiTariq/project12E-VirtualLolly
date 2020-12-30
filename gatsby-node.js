// const path = require('path');
// exports.createPages = async ({actions, graphql}) => {
//   console.log(graphql);
//     const result = await graphql(
//       `query MyQuery{
//             LOLLIES{
//                 getAllLollies{
//                 recipientName
//                 sender
//                 message
//                 flavourTop
//                 flavourMid
//                 flavourBottom
//                 lollyPath
//                 }
              
//           }
//       }
//     `)
//     console.log("from node.js", result)

    // result.data.getAllLollies.map(async (indLolly) => {
    //     await actions.createPage({
    //         path: `lolly/${indLolly.path}`,
    //         component: path.resolve(`./src/template/lollyPage.js`),
    //         context: {
    //             lolly: indLolly
    //         }
    //     })
    // })
// }