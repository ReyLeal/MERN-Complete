const mongoose = require('mongoose');


exports.connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/postApp", {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to the database')
    })
    .catch((error) => {
        console.log('Database connection failed');
        console.error(error);
        process.exit(1);
    })
}