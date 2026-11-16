
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express5');
const axios = require('axios');
const cors = require('cors');

const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFiles } = require('@graphql-tools/load-files');
const path = require('path');
const connect = require('./connection');

// is used to load environment variables from a .env file into process.env.
require('dotenv').config();

const app = express();


async function startServer() {

    // Step 1: Load all GraphQL type definition files from the typeDefs folder.
    // loadFiles() returns a Promise containing the loaded schema definitions.
    const def_File = await loadFiles(
        path.join(__dirname, './typeDefs')
    );

    const resolver_Files = await loadFiles(
        path.join(__dirname, './resolvers')
    );

    // Step 2: Merge all loaded type definitions into a single GraphQL schema.
    const typeDefs = mergeTypeDefs(def_File);

    const resolvers = mergeResolvers(resolver_Files);



    // Initialize Apollo Server with the merged typeDefs and resolvers.
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });


    // Step 3: Start Apollo Server
    await server.start();

    // Step 4: Register Apollo middleware
    app.use(
        '/graphQL',
        cors(),
        express.json(),
        expressMiddleware(server)
    );

    // Step 5: Register normal Express route
    app.get('/', (req, res) => {
        res.send('<h1>Welcome To Dummy Learning Project</h1>');
    });
    
    connect(process.env.CLOUD_DB).then(() => {
        console.log("Database connected Successfully!")
        // Step 6: Start Express Server
        app.listen(process.env.PORT, () => {
            console.log(`Server is Running at: ${process.env.PORT} \n GraphQL running on : http://localhost:${process.env.PORT}/graphQL`);
        });
    }).catch((err) => console.error(err));

}

startServer();