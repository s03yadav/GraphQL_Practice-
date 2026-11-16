const mongoose = require('mongoose');


async function connect(URL){
    try {
        const db = await mongoose.connect(URL);
        return db;
    } catch (err){
        console.log(err);
        throw err;
    }
}

module.exports = connect;