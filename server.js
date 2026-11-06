const express = require('express');
const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@as-integrations/express5');
const axios = require('axios');
const dummyUsers = require('./users.json');
const cors = require('cors');


// is used to load environment variables from a .env file into process.env.
require('dotenv').config();

const app = express();

const typeDefs = `
    type Address {
        houseNumber: Int!
        buildingName: String!
        Area: String!
        pincode: Int!
        City: String!
        State: String!
    }

    type User {
        id: Int!
        name: String!
        address: Address!
        email: String
        mobile: String!
    }

    type Query {
        getUsers: [User]
    }
`

const resolvers = {
    Query : {
        getUsers : () => {
            return dummyUsers
        }
    }
}



const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer() {

    // Step 1: Start Apollo Server
    await server.start();

    // Step 2: Register Apollo middleware
    app.use(
        '/graphQL',
        cors(),
        express.json(),
        expressMiddleware(server)
    );

    // Step 3: Register normal Express route
    app.get('/', (req, res) => {
        res.send('<h1>Welcome To Dummy Learning Project</h1>');
    });

    // Step 4: Start Express Server
    app.listen(process.env.PORT, () => {
        console.log(`Server is Running at: ${process.env.PORT} \n GraphQL running on : http://localhost:${process.env.PORT}/graphQL`);
    });
}

startServer();
