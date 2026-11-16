const userTypeDefs = `
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

    type Mutation {
        newUser(
            name : String!, 
            address : AddressInput!,
            email : String!, 
            mobile : String!
        ) : User!
    }
`


module.exports = userTypeDefs;