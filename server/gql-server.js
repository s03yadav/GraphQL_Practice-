const {ApolloServer} = require('apollo-server');
require('dotenv').config();

const typeDefs = `
    type Query {
        totalPosts  : Int!
    }
`

const resolvers = {
    Query : {
        totalPosts : () => {
            return 52
        }
    }
}


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});


apolloServer.listen(process.env.PORT, ()=> console.log(`GraphQL server running on test PORT : ${process.env.PORT}`));