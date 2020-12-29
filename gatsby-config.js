// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://example.com/graphql'
      }
    }
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "Lolly",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "LOLLIES",
    //     // Url to query from
    //     url: "https://virtual-lolly-2020.netlify.app/.netlify/functions/lollyFunction",
    //   },
    // },

  ],
}