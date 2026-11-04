const express = require('express');

// is used to load environment variables from a .env file into process.env.
require('dotenv').config();

const app = express();

app.get('/graphql', function(req, res){
    return res.json(
       { "message" : "GraphQL tutorial server "}
    )
})

app.listen(process.env.PORT, function(){
    console.log(`Server is Running at : ${process.env.PORT}`)
})