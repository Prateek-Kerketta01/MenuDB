const mongoose = require('mongoose');
require('dotenv').config();
const mongodbURL = process.env.DB_URL;
// mongoDB connection URL
const mongoURL = mongodbURL;

// setup mongoDB connection
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listener for connection
db.on('connected', () => {console.log('MongoDB connection successful')});
db.on('error', () =>{console.log('Error occured while connecting')});
db.on('disconnected', () => {console.log('MongoDB disconnected')});

// export the db object
module.exports = db; 