const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/Hotels";

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
