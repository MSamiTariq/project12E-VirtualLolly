const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require('faunadb')
const q = faunadb.query;

const typeDefs = gql`
  type Query {
    getAllLollies: [Lolly]
  }
  type Lolly {
    recipientName: String!
    message: String!
    sender: String!
    flavourTop: String!
    flavourMid: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,sender: String!, flavourTop: String!,flavourMid: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    getAllLollies: async () => {
      var result = await Client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("allLollies"))),
          q.Lambda((x) => q.Get(x))
        )
      );
      let x = [];
      result.data.map((curr) => {
        x.push(curr.data);
      });

      return x;
    },
  },
  Mutation: {
    createLolly: async (_, args) =>{
      console.log(args)
      const client = new faunadb.Client({secret: "fnAD945UeaACB7LVTOXTK5_0ECj8S_z5Da7QCocT"})
      const id = shortid.generate();

      const result = await client.query(
        q.Create(q.Collection("Lolly"), {
          data: args
        })
      )
      console.log(result);
      console.log(result.data);
      return result.data;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground:true,
  introspection:true
})

const handler = server.createHandler()

module.exports = { handler }
