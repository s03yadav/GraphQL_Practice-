const addressTypeDefs = `
    type Address {
        houseNumber: Int!
        buildingName: String!
        Area: String!
        pincode: Int!
        City: String!
        State: String!
    }

    input AddressInput {
        houseNumber: Int!
        buildingName: String!
        Area: String!
        pincode: Int!
        City: String!
        State: String!
    }
`;

module.exports = addressTypeDefs;