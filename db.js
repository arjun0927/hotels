const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL_Local // local url for mongodb
// const mongoURL = process.env.DB_URL
// set mongoDB connection
mongoose.connect(mongoURL);

// Get default Connection
// Mongodb maintains a default connection object to represent mongoDb connection 
const db = mongoose.connection;

// Define EventListener for Database connection :
db.on('connected', () => {
    console.log("Connection successfully established with MongoDB");
});

db.on('error', (error) => {
    console.error("MongoDB connection error:", error);
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

module.exports = db;
