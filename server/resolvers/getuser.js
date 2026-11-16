const dummyUsers = require('../users.json');

// queries
function getUsers() { return dummyUsers }


// mutations
function newUser(parent, args) {
    console.log(args)
    const User = {
        id: dummyUsers.length + 1,
        name: args.name,
        address: args.address,
        email: args.email,
        mobile: args.mobile,
    };

    dummyUsers.push(User);
    return User;
}


const resolvers = {
    Query: {
        getUsers
    },
    Mutation: {
        newUser
    }
};


module.exports = resolvers;