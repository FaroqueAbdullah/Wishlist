const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI || '';


// connect to mongodb
const connect = () => {
    mongoose
        .connect(URL, {})
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};

module.exports = connect;